import { View, Text, ActivityIndicator, Platform, Pressable, RefreshControl, StyleSheet } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list";

const data = [
    { id: 1, name: "Pan baguete masa madre" },
    { id: 2, name: "Mantequilla Wagyu" },
    { id: 3, name: "Helado de chocolate" },
];

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const { bottom, top } = useSafeAreaInsets();
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

    return (
        <SafeAreaView style={styles.safeContainer}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator />
                    <Text>Cargando...</Text>
                </View>
            ) : (
                <FlashList
                    data={data}
                    estimatedItemSize={70}
                    contentInsetAdjustmentBehavior="automatic"
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    ListHeaderComponent={<Text style={styles.resultText}>3 Resultados</Text>}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => router.push({ pathname: '/detail', params: { mode: 'edit', name: item.name } })}
                        >
                            <View style={styles.listItem}>
                                <View style={styles.avatar} />
                                <Text style={styles.itemText}>{item.name}</Text>
                            </View>
                        </Pressable>
                    )}
                    ListFooterComponent={<View style={{ height: bottom }} />}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    resultText: {
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 0.2,
    },
    avatar: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    itemText: {
        fontSize: 18,
    },
});
