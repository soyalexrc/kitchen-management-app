import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity, StyleSheet, View } from "react-native";
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
                    title: 'Recetas',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <View style={styles.headerRightContainer}>
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
                            style={styles.headerLeftContainer}
                        >
                            <Ionicons name="arrow-back" size={24} style={[styles.icon, { marginRight: isIos ? 0 : 10 }]} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="select_input"
                options={{
                    presentation: 'modal',
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerLargeTitle: true,
                    title: 'Agregar insumos',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <View style={styles.headerRightContainer}>
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
                            style={styles.headerLeftContainer}
                        >
                            <Ionicons name="arrow-back" size={24} style={[styles.icon, { marginRight: isIos ? 0 : 10 }]} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="detail"
                options={{
                    headerLargeTitle: true,
                    headerStyle: { backgroundColor: '#fff' },
                    // headerLeft: () => (
                    //     <TouchableOpacity
                    //         onPress={() => router.back()}
                    //         style={styles.headerLeftContainer}
                    //     >
                    //         <Ionicons name="arrow-back" size={24} style={[styles.icon, { marginRight: isIos ? 0 : 10 }]} />
                    //     </TouchableOpacity>
                    // ),
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                }}
            />
            <Stack.Screen
                name="select_recipe"
                options={{
                    presentation: 'modal',
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerLargeTitle: true,
                    title: 'Agregar recetas',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <View style={styles.headerRightContainer}>
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
                            style={styles.headerLeftContainer}
                        >
                            <Ionicons name="arrow-back" size={24} style={[styles.icon, { marginRight: isIos ? 0 : 10 }]} />
                        </TouchableOpacity>
                    )
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
        color: '#000',
    },
    headerRightContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    headerLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    icon: {
        color: '#000',
    },
});
