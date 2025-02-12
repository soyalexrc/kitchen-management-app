import {
    ActivityIndicator,
    FlatList,
    Platform,
    Pressable,
    RefreshControl,
    StyleSheet,
    Text,
    View
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list"; // Uncomment if using FlashList
import React from "react";

const data = [
    { id: 1, name: "Pedro Ramirez", role: "Chef", station: '' },
    { id: 2, name: "Juan Perez", role: "Chef", station: '' },
    { id: 3, name: "Maria Rodriguez", role: "Cocinero", station: 'Sartenes' },
    { id: 4, name: "Josefa Lopez", role: "Cocinero", station: 'Panaderia' },
    { id: 5, name: "Pedro Ramirez", role: "Cocinero", station: 'Sartenes' },
    { id: 6, name: "Juan Perez", role: "Cocinero", station: 'Hornos' },
    { id: 7, name: "Maria Rodriguez", role: "Cocinero", station: 'Pasteleria' },
    { id: 8, name: "Josefa Lopez", role: "Cocinero", station: 'Hornos' },
    { id: 9, name: "Pedro Ramirez", role: "Cocinero", station: 'Sartenes' },
    { id: 10, name: "Juan Perez", role: "Cocinero", station: 'Hornos' },
];

export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const isIos = Platform.OS === 'ios';

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

    const renderItem = ({ item }: { item: typeof data[0] }) => (
        <Pressable
            key={item.id}
            onPress={() => router.push({ pathname: '/detail', params: { mode: 'edit', name: item.name } })}
            style={styles.itemContainer}
        >
            <View style={styles.avatar} />
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemRole}>{item.role} - {item.station}</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#000" />
                    <Text style={styles.loadingText}>Cargando...</Text>
                </View>
            ) : (
                <>
                    <Text style={styles.resultsText}>10 Resultados</Text>

                    {/* Use FlashList if available for better performance */}
                    <FlashList // Change to FlatList if FlashList is not installed
                        data={data}
                        renderItem={renderItem}
                        estimatedItemSize={70}
                        keyExtractor={(item) => item.id.toString()}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        contentContainerStyle={{ paddingBottom: bottom }}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: Platform.OS === "ios" ? 200 : 0, // Simulating headerLarge
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
    },
    resultsText: {
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd",
    },
    avatar: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    itemTextContainer: {
        marginLeft: 20,
    },
    itemName: {
        fontSize: 16,
    },
    itemRole: {
        fontWeight: "bold",
        color: "#777",
    },
});
