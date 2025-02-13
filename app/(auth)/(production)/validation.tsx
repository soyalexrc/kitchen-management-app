import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Page() {
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const [inputs, setInputs] = useState([
        { id: 1, name: "Harina de trigo", measure: 'Kg', quantity: 1 },
        { id: 2, name: "Levadura fresca", measure: 'Gr', quantity: 500 },
        { id: 3, name: "Aceite de oliva", measure: 'Lts', quantity: 0.25 }
    ]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.avatar} />
                <Text style={styles.title}>Nombre de la receta en dos lineas porque es bastante extensa</Text>
                <Text style={styles.subtitle}>Pedro Perez - Cocinero - Sartenes</Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.sectionTitle}>Total de insumos utilizados</Text>
                {inputs.map((item, index) => (
                    <Pressable key={item.id}>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemInfoContainer}>
                                <View style={styles.itemAvatar} />
                                <Text style={styles.itemText}>{item.name}</Text>
                            </View>
                            <View style={styles.itemDetailsContainer}>
                                <View style={[styles.quantityBox, { borderColor: index === 0 ? 'green' : index === 1 ? 'orangered' : 'red' }]}>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                </View>
                                <Text>{item.measure}</Text>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>

            <Pressable style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Aprobar</Text>
            </Pressable>

            <View style={{ height: bottom }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    headerContainer: {
        gap: 10,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 26,
    },
    subtitle: {
        marginTop: 30,
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: '#ccc',
    },
    itemInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    itemAvatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    itemText: {
        fontSize: 16,
    },
    itemDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    quantityBox: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityText: {
        textAlign: 'center',
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 40,
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
