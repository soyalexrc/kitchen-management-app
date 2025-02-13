import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "@/lib/components/home";
import { ProductionResumeCarousel } from "@/lib/components/home/ProductionResumeCarousel";
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Page() {
    const { top } = useSafeAreaInsets();
    const { user } = useUser();

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View>
                    <ProductionResumeCarousel />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.row}>
                        {user?.publicMetadata?.role !== 'Cocinero' && (
                            <Link style={styles.flex} href="/(users)/list" asChild>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Usuarios</Text>
                                </TouchableOpacity>
                            </Link>
                        )}
                        <Link style={styles.flex} href="/(recipes)/list" asChild>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Recetas</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View style={styles.row}>
                        <Link style={styles.flex} href="/(warehouses)/list" asChild>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Almacenes</Text>
                            </TouchableOpacity>
                        </Link>
                        <Link style={styles.flex} href="/(production)/list" asChild>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Producción</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    headerContainer: {
        paddingHorizontal: 20,
    },
    scrollContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 2,
        gap: 20,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        gap: 20,
    },
    flex: {
        flex: 1,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
