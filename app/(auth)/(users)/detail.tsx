import { ScrollView, TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as DropdownMenu from "zeego/dropdown-menu";
import { useNavigation, useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useLayoutEffect } from "react";

export default function Page() {
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const params = useSearchParams();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('mode') === 'add' ? 'Nuevo usuario' : params.get('name'),
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
            <View style={styles.avatarContainer}>
                <View style={styles.avatar} />
                <TouchableOpacity style={styles.cameraButton}>
                    <Ionicons name="camera" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text>Nombre</Text>
                    <TextInput style={styles.input} returnKeyType="done" />
                </View>
                <View style={styles.inputGroup}>
                    <Text>Apellido</Text>
                    <TextInput style={styles.input} returnKeyType="done" />
                </View>
                <View style={styles.inputGroup}>
                    <Text>Correo electrónico</Text>
                    <TextInput style={styles.input} returnKeyType="done" placeholder="usuario@gmail.com" />
                </View>
                <View style={styles.inputGroup}>
                    <Text>Nombre de usuario</Text>
                    <TextInput style={styles.input} returnKeyType="done" placeholder="usuario1234" />
                </View>
                <View style={styles.inputGroup}>
                    <Text>Rol</Text>
                    <DropdownMenu.Root key="menu">
                        <DropdownMenu.Trigger>
                            <TouchableOpacity style={styles.dropdownButton}>
                                <Text style={styles.dropdownText}>Seleccionar</Text>
                                <Ionicons name="caret-down" size={24} />
                            </TouchableOpacity>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Group key="0">
                                <DropdownMenu.Item key="Admin"><DropdownMenu.ItemTitle>Admin</DropdownMenu.ItemTitle></DropdownMenu.Item>
                                <DropdownMenu.Item key="Chef"><DropdownMenu.ItemTitle>Chef</DropdownMenu.ItemTitle></DropdownMenu.Item>
                                <DropdownMenu.Item key="Cocinero"><DropdownMenu.ItemTitle>Cocinero</DropdownMenu.ItemTitle></DropdownMenu.Item>
                                <DropdownMenu.Item key="Pasteleria"><DropdownMenu.ItemTitle>Pasteleria</DropdownMenu.ItemTitle></DropdownMenu.Item>
                                <DropdownMenu.Item key="Panaderia"><DropdownMenu.ItemTitle>Panaderia</DropdownMenu.ItemTitle></DropdownMenu.Item>
                                <DropdownMenu.Item key="Sartenes"><DropdownMenu.ItemTitle>Sartenes</DropdownMenu.ItemTitle></DropdownMenu.Item>
                                <DropdownMenu.Item key="Hornos"><DropdownMenu.ItemTitle>Hornos</DropdownMenu.ItemTitle></DropdownMenu.Item>
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </View>
                <View style={styles.inputGroup}>
                    <Text>Contraseña</Text>
                    <TextInput style={styles.input} returnKeyType="done" />
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
                <Text style={styles.saveButtonText}>Guardar cambios</Text>
            </TouchableOpacity>

            <View style={{ height: bottom }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    cameraButton: {
        position: "absolute",
        right: -10,
        bottom: -10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        marginTop: 50,
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    dropdownButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownText: {
        color: 'gray',
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    icon: {
        color: '#333',
    },
});
