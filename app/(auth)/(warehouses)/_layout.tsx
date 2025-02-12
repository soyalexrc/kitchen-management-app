import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    const router = useRouter();
    const isIos = Platform.OS === 'ios';
    const theme = {
        color2: "#f8f8f8",
        color12: "#333",
    };

    return (
        <Stack>
            <Stack.Screen
                name="list"
                options={{
                    headerStyle: { backgroundColor: theme.color2 },
                    headerTitleStyle: { color: theme.color12 },
                    headerLargeTitle: true,
                    title: 'Almacenes',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={{ color: theme.color12 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push({ pathname: '/detail', params: { mode: 'add' } })}>
                                <Ionicons name="add" size={24} style={{ color: theme.color12 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} style={{ color: theme.color12, marginRight: isIos ? 0 : 10 }} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="select_warehouse"
                options={{
                    presentation: 'modal',
                    headerStyle: { backgroundColor: theme.color2 },
                    headerTitleStyle: { color: theme.color12 },
                    headerLargeTitle: true,
                    title: 'Agregar Sub Almacen',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={{ color: theme.color12 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push({ pathname: '/detail', params: { mode: 'add' } })}>
                                <Ionicons name="add" size={24} style={{ color: theme.color12 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} style={{ color: theme.color12, marginRight: isIos ? 0 : 10 }} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="input_detail"
                options={{
                    headerStyle: { backgroundColor: theme.color2 },
                    headerTitleStyle: { color: theme.color12 },
                }}
            />
            <Stack.Screen
                name="detail"
                options={{
                    headerStyle: { backgroundColor: theme.color2 },
                    headerTitleStyle: { color: theme.color12 },
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
