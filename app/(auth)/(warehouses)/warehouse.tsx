import React, { Fragment, useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
    ActivityIndicator,
    Platform,
    Pressable,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack, useNavigation, useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import * as DropdownMenu from "zeego/dropdown-menu";
import { Ionicons } from "@expo/vector-icons";

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

    const params = useSearchParams();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get("name"),
        });
    }, [navigation]);

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerLargeTitle: true,
                    title: params.get("name") ?? '',
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
            <ScrollView
                style={styles.container}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator />
                        <Text>Cargando...</Text>
                    </View>
                ) : (
                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultsText}>2 Resultados</Text>
                        {inputs.map((item) => (
                            <Pressable key={item.id} onPress={() => router.push({ pathname: "/input_detail", params: { name: item.name, id: item.id } })}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.smallIcon} />
                                    <Text style={styles.itemName}>{item.name}</Text>
                                </View>
                            </Pressable>
                        ))}
                        <Text style={styles.sectionTitle}>Sub Almacenes</Text>
                        {data.map((item) => (
                            <Pressable key={item.id} onPress={() => router.push({ pathname: "/warehouse", params: { name: item.name, id: item.id } })}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.largeIcon} />
                                    <View>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemDetails}>insumos: {item.children}</Text>
                                        <Text style={styles.itemDetails}>Sub almacenes: {item.warehouses}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                )}
                <View style={{ height: bottom }} />
            </ScrollView>
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
    resultsContainer: {
        paddingHorizontal: 20,
        gap: 10,
    },
    resultsText: {
        marginVertical: 10,
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
    smallIcon: {
        backgroundColor: "white",
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    largeIcon: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    itemName: {
        fontSize: 16,
    },
    itemDetails: {
        fontWeight: "bold",
        color: "#555",
    },
});
