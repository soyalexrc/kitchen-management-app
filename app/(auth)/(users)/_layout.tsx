import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    const router = useRouter();
    const isIos = Platform.OS === 'ios';

    return (
        <Stack>
            <Stack.Screen
                name="list"
                options={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerLargeTitle: true,
                    title: 'Usuarios',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push({ pathname: '/detail', params: { mode: 'add' } })}>
                                <Ionicons name="add" size={24} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={styles.backButton}
                        >
                            <Ionicons name="arrow-back" size={24} style={[styles.icon, { marginRight: isIos ? 0 : 10 }]} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="detail"
                options={{
                    title: 'Detalle',
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f2f2f2',
    },
    headerTitle: {
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    icon: {
        color: '#333',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
