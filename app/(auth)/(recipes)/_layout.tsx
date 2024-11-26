import {Stack, useRouter} from "expo-router";
import {Platform, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useTheme, XStack} from "tamagui";

export default function Layout() {
    const router = useRouter();
    const theme = useTheme();
    const isIos = Platform.OS === 'ios';

    return (
        <Stack>
            <Stack.Screen
                name="list"
                options={{
                    headerStyle: {
                        backgroundColor: theme.color2?.val
                    },
                    headerTitleStyle: {
                        color: theme.color12?.val
                    },
                    headerLargeTitle: true,
                    title: 'Recetas',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <XStack gap={20}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={{ color: theme.color12?.val }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push({ pathname: '/detail', params: { mode: 'add' } })}>
                                <Ionicons name="add" size={24} style={{ color: theme.color12?.val }} />
                            </TouchableOpacity>
                        </XStack>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}
                        >
                            <Ionicons name="arrow-back" size={24} style={{ color: theme.color12?.val, marginRight: isIos ? 0 : 10 }}/>
                            {/*<Text>Atras</Text>*/}
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="select_input"
                options={{
                    presentation: 'modal',
                    headerStyle: {
                        backgroundColor: theme.color2?.val
                    },
                    headerTitleStyle: {
                        color: theme.color12?.val
                    },
                    headerLargeTitle: true,
                    title: 'Agregar insumos',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <XStack gap={20}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={{color: theme.color12?.val}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push({pathname: '/detail', params: {mode: 'add'}})}>
                                <Ionicons name="add" size={24} style={{color: theme.color12?.val}}/>
                            </TouchableOpacity>
                        </XStack>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}
                        >
                            <Ionicons name="arrow-back" size={24}
                                      style={{color: theme.color12?.val, marginRight: isIos ? 0 : 10}}/>
                            {/*<Text>Atras</Text>*/}
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="select_recipe"
                options={{
                    presentation: 'modal',
                    headerStyle: {
                        backgroundColor: theme.color2?.val
                    },
                    headerTitleStyle: {
                        color: theme.color12?.val
                    },
                    headerLargeTitle: true,
                    title: 'Agregar recetas',
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <XStack gap={20}>
                            <TouchableOpacity>
                                <Ionicons name="filter" size={24} style={{color: theme.color12?.val}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push({pathname: '/detail', params: {mode: 'add'}})}>
                                <Ionicons name="add" size={24} style={{color: theme.color12?.val}}/>
                            </TouchableOpacity>
                        </XStack>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}
                        >
                            <Ionicons name="arrow-back" size={24}
                                      style={{color: theme.color12?.val, marginRight: isIos ? 0 : 10}}/>
                            {/*<Text>Atras</Text>*/}
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack>
    );
}
