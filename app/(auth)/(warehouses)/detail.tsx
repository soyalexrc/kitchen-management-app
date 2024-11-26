import {Button, ScrollView, Separator, Text, useTheme, View, XStack, YStack} from "tamagui";
import {useSearchParams} from "expo-router/build/hooks";
import {useNavigation, useRouter} from "expo-router";
import {useLayoutEffect} from "react";
import * as DropdownMenu from "zeego/dropdown-menu";
import {TextInput, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Page() {
    const params = useSearchParams();
    const navigation = useNavigation();
    const theme = useTheme();
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('mode') === 'add' ? 'Nuevo Almacen' : params.get('name'),
            headerRight: params.get('mode') === 'add' ? null : () => (
                <DropdownMenu.Root key="menu">
                    <DropdownMenu.Trigger>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-vertical" size={24} style={{color: theme.color12?.val}}/>
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

        })
    }, [navigation])
    return (
        <ScrollView flex={1} backgroundColor="$color2">
            <XStack justifyContent="center" marginTop={50}>
                <View>
                    <View
                        width={120}
                        height={120}
                        borderRadius={100}
                        backgroundColor="white"
                    />
                    <TouchableOpacity
                        style={{
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
                            justifyContent: "center"
                        }}
                    >
                        <Ionicons name="camera" size={24}/>
                    </TouchableOpacity>
                </View>
            </XStack>

            <YStack paddingHorizontal={20} marginTop={50}>
                <YStack gap={10}>
                    <Text>Nombre</Text>
                    <TextInput
                        returnKeyType="done"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 20
                        }}
                    />
                </YStack>
            </YStack>

            {/*<YStack>*/}
            {/*    <Text textAlign="center">Hoja de vida aqui...</Text>*/}
            {/*</YStack>*/}

            <Button margin={20} onPress={() => router.back()}>
                <Text>Guardar cambios</Text>
            </Button>

            <View height={bottom}/>
        </ScrollView>
    )
}
