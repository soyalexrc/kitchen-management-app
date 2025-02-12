import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    const router = useRouter();
    const isIos = Platform.OS === "ios";

    return (
        <Stack>
            <Stack.Screen
                name="select_recipe"
                options={{
                    presentation: "modal",
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerLargeTitle: true,
                    title: "Seleccionar Receta",
                    headerBackTitle: "Atras",
                    headerSearchBarOptions: {
                        autoCapitalize: "none",
                        inputType: "text",
                    },
                    headerRight: () => (
                        <View style={styles.headerIcons}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => router.push({ pathname: "/detail", params: { mode: "add" } })}
                            >
                                <Ionicons name="add" size={24} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} style={[styles.icon, { marginRight: isIos ? 0 : 10 }]} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen name="recipe_detail" options={{ headerStyle: styles.header, headerTitleStyle: styles.headerTitle }} />
            <Stack.Screen name="closing_process" options={{ title: "Cerrar Proceso", headerStyle: styles.header, headerTitleStyle: styles.headerTitle }} />
            <Stack.Screen name="validation" options={{ title: "Validacion", headerStyle: styles.header, headerTitleStyle: styles.headerTitle }} />
        </Stack>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f2f2f2", // Reemplaza con tu color dinámico si es necesario
    },
    headerTitle: {
        color: "#000", // Reemplaza con tu color dinámico si es necesario
    },
    headerIcons: {
        flexDirection: "row",
        gap: 20,
    },
    icon: {
        color: "#000", // Reemplaza con tu color dinámico si es necesario
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
});
