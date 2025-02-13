import { ScrollView, Text, View, ActivityIndicator, Platform, Pressable, RefreshControl, StyleSheet } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const data = [
    { id: 1, name: "Pan baguete masa madre" },
    { id: 2, name: "Mantequilla Wagyu" },
    { id: 3, name: "Helado de chocolate" },
];

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
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
                <View style={[styles.listContainer, { marginTop: isIos ? 210 : 0 }]}>
                    <Text style={styles.resultText}>3 Resultados</Text>
                    {data.map(item => (
                        <Pressable
                            key={item.id}
                            onPress={() => router.push({ pathname: '/detail', params: { mode: 'edit', name: item.name } })}
                        >
                            <View style={styles.listItem}>
                                <View style={styles.avatar} />
                                <Text style={styles.itemText}>{item.name}</Text>
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
        backgroundColor: '#f2f2f2',
    },
    loadingContainer: {
        alignItems: "center",
        marginTop: 300,
        gap: 10,
        justifyContent: "center",
    },
    listContainer: {
        gap: 10,
    },
    resultText: {
        paddingHorizontal: 20,
        marginVertical: 10,
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
