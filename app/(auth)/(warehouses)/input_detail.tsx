import { useLayoutEffect } from "react";
import { useSearchParams } from "expo-router/build/hooks";
import { useNavigation, useRouter } from "expo-router";
import { TextInput, TouchableOpacity, ScrollView, Text, View, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
    const params = useSearchParams();
    const navigation = useNavigation();
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get("name"),
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            {/* Imagen con botón de cámara */}
            <View style={styles.imageContainer}>
                <View style={styles.image} />
                <TouchableOpacity style={styles.cameraButton}>
                    <Ionicons name="camera" size={24} />
                </TouchableOpacity>
            </View>

            {/* Formulario */}
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text>Nombre</Text>
                    <TextInput returnKeyType="done" style={styles.input} />
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text>Precio Kg - L</Text>
                        <TextInput returnKeyType="done" style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text>Cantidad</Text>
                        <TextInput returnKeyType="done" style={styles.input} />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text>Costo</Text>
                        <TextInput returnKeyType="done" style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text>Merma</Text>
                        <TextInput returnKeyType="done" style={styles.input} />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text>Merma 2</Text>
                        <TextInput returnKeyType="done" style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text>Costo total</Text>
                        <TextInput returnKeyType="done" style={styles.input} />
                    </View>
                </View>
            </View>

            {/* Botón para guardar */}
            <View style={styles.buttonContainer}>
                <Button title="Guardar cambios" onPress={() => router.back()} />
            </View>

            <View style={{ height: bottom }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: "white",
    },
    cameraButton: {
        position: "absolute",
        right: -10,
        bottom: -10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgray",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        paddingHorizontal: 20,
        marginTop: 50,
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
    },
    row: {
        flexDirection: "row",
        gap: 20,
    },
    buttonContainer: {
        margin: 20,
    },
});
