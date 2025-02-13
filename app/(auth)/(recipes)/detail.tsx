import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "@/lib/components/home";
import { ProductionResumeCarousel } from "@/lib/components/home/ProductionResumeCarousel";
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Fragment, useLayoutEffect, useState } from "react";

export default function Page() {
    const { top } = useSafeAreaInsets();
    const { user } = useUser();
    const router = useRouter();
    const [inputs, setInputs] = useState([
        { id: 1, name: "Harina de trigo" },
        { id: 2, name: "Levadura fresca" },
    ]);
    const [data, setData] = useState([
        { id: 3, name: "Mantequilla Wagyu" },
    ]);

    return (
        <Fragment>
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

                    <View style={styles.section}>
                        <Text style={styles.title}>Insumos</Text>
                        <TouchableOpacity onPress={() => router.push('/select_input')} style={styles.addButton}>
                            <Ionicons name="add" size={20} color="white" />
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                        {inputs.map((item) => (
                            <Pressable key={item.id}>
                                <View style={styles.listItem}>
                                    <View style={styles.circle} />
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </View>
                            </Pressable>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Sub Recetas</Text>
                        <TouchableOpacity onPress={() => router.push('/select_recipe')} style={styles.addButton}>
                            <Ionicons name="add" size={20} color="white" />
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                        {data.map((item) => (
                            <Pressable key={item.id} onPress={() => router.push({ pathname: '/detail', params: { mode: 'edit', name: item.name } })}>
                                <View style={styles.listItem}>
                                    <View style={styles.circleLarge} />
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </Fragment>
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
    section: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    addButton: {
        flexDirection: 'row',
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    addButtonText: {
        color: 'white',
        marginLeft: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    circle: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    circleLarge: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    itemText: {
        fontSize: 16,
    },
});
