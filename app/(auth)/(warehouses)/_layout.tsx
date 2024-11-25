import {Stack, useRouter} from "expo-router";
import {useTheme, XStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as DropdownMenu from "zeego/dropdown-menu";

export default function Layout() {
    const router = useRouter();
    const theme = useTheme();

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
                    title: 'Almacenes',
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
                            <Ionicons name="arrow-back" size={24} style={{color: theme.color12?.val}}/>
                            {/*<Text>Atras</Text>*/}
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen name="select_warehouse" options={{ presentation: 'modal' }} />
            <Stack.Screen name="select_input" options={{ presentation: 'modal' }} />
        </Stack>
    )
}
