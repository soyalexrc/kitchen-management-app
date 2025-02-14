import React, { Fragment, useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
    ActivityIndicator,
    Platform,
    Pressable,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {Stack, useNavigation, useRouter, useLocalSearchParams} from "expo-router";
import * as DropdownMenu from "zeego/dropdown-menu";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const isIos = Platform.OS === "ios";

    const [inputs, setInputs] = useState([
        { id: 1, name: "Camarones" },
        { id: 2, name: "Pulpa de fruta" },
    ]);

    const [data, setData] = useState([
        { id: 1, name: "Carnes", children: 2, warehouses: 0 },
    ]);

    const combinedData: any = [
        { type: "header", title: "Items" },
        ...inputs.map(item => ({ ...item, type: "input" })),
        { type: "header", title: "Sub Almacenes" },
        ...data.map(item => ({ ...item, type: "warehouse" })),
    ];

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const {name} = useLocalSearchParams<{ name: string }>();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        });
    }, [navigation]);

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerLargeTitle: true,
                    title: name ?? '',
                    headerBackTitle: "Atras",
                    headerSearchBarOptions: {
                        autoCapitalize: "none",
                        inputType: "text",
                    },
                    headerRight: () => (
                        <DropdownMenu.Root key="menu">
                            <DropdownMenu.Trigger>
                                <TouchableOpacity>
                                    <Ionicons name="ellipsis-vertical" size={24} style={styles.icon} />
                                </TouchableOpacity>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Group key="0">
                                    <DropdownMenu.Item key="edit" onSelect={() => router.push({ pathname: "/detail", params: { mode: "edit", name: "Test" } })}>
                                        <DropdownMenu.ItemTitle>Editar</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item key="input" onSelect={() => router.push({ pathname: "/select_input", params: { id: 123 } })}>
                                        <DropdownMenu.ItemTitle>Agregar Insumo</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item key="warehouse" onSelect={() => router.push({ pathname: "/select_warehouse", params: { id: 123 } })}>
                                        <DropdownMenu.ItemTitle>Agregar Sub Almacen</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Group>
                                <DropdownMenu.Group key="1">
                                    <DropdownMenu.Item key="delete" destructive>
                                        <DropdownMenu.ItemTitle>Eliminar</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} style={styles.icon} />
                        </TouchableOpacity>
                    ),
                }}
            />

            <SafeAreaView style={styles.container}>
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator />
                        <Text>Cargando...</Text>
                    </View>
                ) : (
                    <FlashList
                        data={combinedData}
                        keyExtractor={(item: any, index) => item.type + index}
                        estimatedItemSize={80}
                        contentInsetAdjustmentBehavior="automatic"
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        renderItem={({ item }: {item: any}) => {
                            if (item.type === "header") {
                                return <Text style={styles.sectionTitle}>{item.title}</Text>;
                            }
                            return (
                                <Pressable key={item.id} onPress={() => router.push({ pathname: item.type === "input" ? "/input_detail" : "/warehouse", params: { name: item.name, id: item.id } })}>
                                    <View style={styles.itemContainer}>
                                        <View style={item.type === "input" ? styles.smallIcon : styles.largeIcon} />
                                        <View>
                                            <Text style={styles.itemName}>{item.name}</Text>
                                            {item.type === "warehouse" && (
                                                <>
                                                    <Text style={styles.itemDetails}>insumos: {item.children}</Text>
                                                    <Text style={styles.itemDetails}>Sub almacenes: {item.warehouses}</Text>
                                                </>
                                            )}
                                        </View>
                                    </View>
                                </Pressable>
                            );
                        }}
                    />
                )}
                <View style={{ height: bottom }} />
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    header: {
        backgroundColor: "#ddd",
    },
    headerTitle: {
        color: "#333",
    },
    icon: {
        color: "#333",
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    loadingContainer: {
        alignItems: "center",
        marginTop: 300,
        justifyContent: "center",
    },
    sectionTitle: {
        fontSize: 20,
        margin: 20,
        fontWeight: "bold",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 0.2,
        gap: 20,
    },
    itemName: {},
    smallIcon: {},
    largeIcon: {},
    itemDetails: {},
});
