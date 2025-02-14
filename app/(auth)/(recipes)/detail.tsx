import { useUser } from "@clerk/clerk-expo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {useNavigation, useRouter} from "expo-router";
import { View, TouchableOpacity, Text, StyleSheet, Pressable, SafeAreaView, RefreshControl } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, {Fragment, useCallback, useLayoutEffect, useState} from "react";
import { FlashList } from "@shopify/flash-list";
import * as DropdownMenu from "zeego/dropdown-menu";
import {useSearchParams} from "expo-router/build/hooks";

export default function Page() {
    const { bottom } = useSafeAreaInsets();
    const { user } = useUser();
    const params = useSearchParams();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

    const [items, setItems] = useState([
        { id: 1, name: "Harina de trigo", type: "insumo" },
        { id: 2, name: "Levadura fresca", type: "insumo" },
        { id: 3, name: "Mantequilla Wagyu", type: "sub_receta" },
    ]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('mode') === 'add' ? 'Nuevo Almacen' : params.get('name'),
            headerRight: params.get('mode') === 'add' ? null : () => (
                <DropdownMenu.Root key="menu">
                    <DropdownMenu.Trigger>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-vertical" size={24}  />
                        </TouchableOpacity>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Group key="0">
                            <DropdownMenu.Item key="export">
                                <DropdownMenu.ItemTitle>Exportar</DropdownMenu.ItemTitle>
                            </DropdownMenu.Item>
                        </DropdownMenu.Group>
                        <DropdownMenu.Group key="1">
                            <DropdownMenu.Item key="delete" destructive>
                                <DropdownMenu.ItemTitle>Eliminar</DropdownMenu.ItemTitle>
                            </DropdownMenu.Item>
                        </DropdownMenu.Group>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            )
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <FlashList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                estimatedItemSize={50}
                contentInsetAdjustmentBehavior="automatic"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item, index }) => (
                    <Fragment>
                        {/* Header Section */}
                        {index === 0 || items[index - 1].type !== item.type ? (
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>
                                    {item.type === "insumo" ? "Insumos" : "Sub Recetas"}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => router.push(item.type === "insumo" ? '/select_input' : '/select_recipe')}
                                    style={styles.addButton}
                                >
                                    <Ionicons name="add" size={20} color="white" />
                                    <Text style={styles.addButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}

                        {/* List Item */}
                        <Pressable
                            onPress={() =>
                                item.type === "sub_receta" &&
                                router.push({ pathname: "/detail", params: { mode: "edit", name: item.name } })
                            }
                        >
                            <View style={styles.listItem}>
                                <View style={item.type === "insumo" ? styles.circle : styles.circleLarge} />
                                <Text style={styles.itemText}>{item.name}</Text>
                            </View>
                        </Pressable>
                    </Fragment>
                )}
            />
            <View style={{ height: bottom }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    innerContainer: {
        flex: 1,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#e0e0e0",
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    addButton: {
        flexDirection: "row",
        backgroundColor: "#007AFF",
        padding: 8,
        borderRadius: 10,
        alignItems: "center",
    },
    addButtonText: {
        color: "white",
        marginLeft: 5,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    circle: {
        backgroundColor: "white",
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    circleLarge: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    itemText: {
        fontSize: 16,
    },
});

