import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Platform,
    Pressable,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const data = [
    { id: 1, name: "Congelados", children: 2, warehouses: 0 },
    { id: 2, name: "Verduras", children: 1, warehouses: 1 },
];

export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const isIos = Platform.OS === "ios";

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

    return (
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
                <View style={[styles.resultsContainer, { marginTop: isIos ? 210 : 0 }]}>
                    <Text style={styles.resultsText}>10 Resultados</Text>
                    {data.map((item) => (
                        <Pressable
                            key={item.id}
                            onPress={() => router.push({ pathname: "/warehouse", params: { id: item.id, name: item.name } })}
                        >
                            <View style={styles.itemContainer}>
                                <View style={styles.icon} />
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
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
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 0.2,
        gap: 20,
    },
    icon: {
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
