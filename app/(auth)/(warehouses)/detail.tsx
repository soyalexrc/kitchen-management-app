import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity, StyleSheet, View, ScrollView, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSearchParams } from "expo-router/build/hooks";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import * as DropdownMenu from "zeego/dropdown-menu";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
    const params = useSearchParams();
    const navigation = useNavigation();
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('mode') === 'add' ? 'Nuevo Almacen' : params.get('name'),
            headerRight: params.get('mode') === 'add' ? null : () => (
                <DropdownMenu.Root key="menu">
                    <DropdownMenu.Trigger>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-vertical" size={24} style={styles.icon} />
                        </TouchableOpacity>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Group key="0">
                            <DropdownMenu.Item key="export">
                                <DropdownMenu.ItemTitle>Exportar</DropdownMenu.ItemTitle>
                            </DropdownMenu.Item>
                        </DropdownMenu.Group>
                        <DropdownMenu.Group key="1">
                            <DropdownMenu.Item key="delete" destructive>
                                <DropdownMenu.ItemTitle>Eliminar</DropdownMenu.ItemTitle>
                            </DropdownMenu.Item>
                        </DropdownMenu.Group>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            )
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.imagePlaceholder} />
                <TouchableOpacity style={styles.cameraButton}>
                    <Ionicons name="camera" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <Text>Nombre</Text>
                <TextInput returnKeyType="done" style={styles.input} />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Guardar cambios</Text>
            </TouchableOpacity>

            <View style={{ height: bottom }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    imagePlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    cameraButton: {
        position: 'absolute',
        right: -10,
        bottom: -10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        paddingHorizontal: 20,
        marginTop: 50,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    saveButton: {
        margin: 20,
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
    icon: {
        color: '#000',
    },
});
