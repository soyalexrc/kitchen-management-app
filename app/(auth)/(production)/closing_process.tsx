import {
    ScrollView,
    Text,
    View,
    TextInput,
    Pressable,
    StyleSheet,
    Button,
    Platform
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Page() {
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const [inputs, setInputs] = useState([
        { id: 1, name: "Harina de trigo", measure: "Kg", quantity: 1 },
        { id: 2, name: "Levadura fresca", measure: "Gr", quantity: 500 },
        { id: 3, name: "Aceite de oliva", measure: "Lts", quantity: 0.25 }
    ]);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <View style={styles.avatar} />
                <Text style={styles.recipeTitle}>Nombre de la receta</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Total de insumos utilizados</Text>

                {inputs.map((item) => (
                    <Pressable key={item.id} style={styles.inputRow}>
                        <View style={styles.inputGroup}>
                            <View style={styles.icon} />
                            <Text style={styles.inputText}>{item.name}</Text>
                        </View>

                        <View style={styles.quantityGroup}>
                            <TextInput
                                keyboardType="numeric"
                                returnKeyType="done"
                                style={styles.input}
                            />
                            <Text style={styles.measureText}>{item.measure}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Completar" onPress={() => router.back()} />
            </View>

            <View style={{ height: bottom }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#F5F5F5", // Ajusta el color según el equivalente de $color2
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "white",
    },
    recipeTitle: {
        fontSize: 26,
        fontWeight: "bold",
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomColor: "#D3D3D3", // Equivalente de $color5
        borderBottomWidth: 0.2,
    },
    inputGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "white",
    },
    inputText: {
        fontSize: 16,
    },
    quantityGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    input: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 6,
        width: 50,
        textAlign: "center",
    },
    measureText: {
        fontSize: 16,
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginVertical: 40,
    },
});
