import {
    ActivityIndicator,
    Dimensions,
    Platform,
    Pressable,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";
import {Fragment, useCallback, useEffect, useLayoutEffect, useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Stack, useNavigation, useRouter} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {useUser} from "@clerk/clerk-expo";

const {width} = Dimensions.get('window');

export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const {user} = useUser();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const processes: number = 2;
    const {bottom} = useSafeAreaInsets();
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

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerSearchBarOptions: {
                autoCapitalize: 'none',
                inputType: 'text',
            },
            headerRight: () => (
                <TouchableOpacity>
                    <Ionicons name={user?.publicMetadata?.role === 'Chef' || user?.publicMetadata?.role === 'Admin' ? "filter" : "list"} size={24} style={styles.icon}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    title: 'Producción',
                    headerBackTitle: 'Atrás',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={styles.headerLeft}
                        >
                            <Ionicons name="arrow-back" size={24} style={styles.icon}/>
                        </TouchableOpacity>
                    )
                }}
            />
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator/>
                    <Text>Cargando...</Text>
                </View>
            ) : (
                <ScrollView
                    style={styles.scrollView}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                    <View style={styles.container}>
                        <Text style={styles.resultsText}>3 Resultados</Text>

                        <Text style={styles.sectionTitle}>En proceso</Text>

                        {[{id: 1, time: "9:25 AM"}, {id: 2, time: "3:30 PM"}].map((item) => (
                            <Pressable key={item.id} onPress={() => router.push('/validation')} style={styles.card}>
                                <Text style={styles.cardTitle}>Nombre de receta</Text>
                                <View style={styles.progressBar}>
                                    <View style={[styles.progress, {width: '50%'}]}/>
                                </View>
                                <View style={styles.row}>
                                    <View style={styles.row}>
                                        <Ionicons name='time' size={24} color="black"/>
                                        <Text style={styles.text}>{item.time}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>--:--</Text>
                                        <Ionicons name='time' size={24} color="black"/>
                                    </View>
                                </View>
                            </Pressable>
                        ))}

                        <Text style={styles.sectionTitle}>Completados</Text>

                        <Pressable onPress={() => router.push('/validation')} style={styles.card}>
                            <Text style={styles.cardTitle}>Nombre de receta</Text>
                            <View style={styles.progressBar}>
                                <View style={[styles.progress, {width: '100%', backgroundColor: '#5DE72F'}]}/>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.row}>
                                    <Ionicons name='time' size={24} color="black"/>
                                    <Text style={styles.text}>9:25 AM</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>12:55 PM</Text>
                                    <Ionicons name='time' size={24} color="black"/>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{height: bottom + 50}}/>
                </ScrollView>
            )}
        </Fragment>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f5f5f5',
    },
    headerTitle: {
        color: '#000',
    },
    icon: {
        color: '#000',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    resultsText: {
        marginVertical: 10,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#fff',
        width: width - 20,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: '#000',
    },
    progressBar: {
        height: 5,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 5,
    },
    progress: {
        height: '100%',
        backgroundColor: '#e5c62d',
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: '#000',
    }
});
