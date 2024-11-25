import {Button, ScrollView, Separator, Text, useTheme, View, XStack, YStack, ZStack} from "tamagui";
import {TextInput, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import * as DropdownMenu from "zeego/dropdown-menu";
import {useNavigation, useRouter} from "expo-router";
import {useSearchParams} from "expo-router/build/hooks";
import {useLayoutEffect} from "react";

export default function Page() {
    const theme = useTheme();
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();
    const params = useSearchParams();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('mode') === 'add' ? 'Agregar usuario' : 'Editar usuario',
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
                <YStack gap={10}>
                    <Text>Apellido</Text>
                    <TextInput
                        returnKeyType="done"
                        placeholderTextColor={theme.color1?.val}
                        style={{
                            backgroundColor: 'white',
                            color: theme.color1?.val,
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 20
                        }}
                    />
                </YStack>
                <YStack gap={10}>
                    <Text>Correo electronico</Text>
                    <TextInput
                        returnKeyType="done"
                        placeholder="usuario@gmail.com"
                        placeholderTextColor={theme.color10?.val}
                        style={{
                            backgroundColor: 'white',
                            color: theme.color1?.val,
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 20
                        }}
                    />
                </YStack>
                <YStack gap={10}>
                    <Text>Nombre de usuario</Text>
                    <TextInput
                        returnKeyType="done"
                        placeholder="usuario1234"
                        placeholderTextColor={theme.color10?.val}
                        style={{
                            backgroundColor: 'white',
                            color: theme.color1?.val,
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 20
                        }}
                    />
                </YStack>
                <YStack gap={10}>
                    <Text>Rol</Text>
                    <DropdownMenu.Root key="menu">
                        <DropdownMenu.Trigger>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    padding: 10,
                                    marginBottom: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Text color="gray">Seleccionar</Text>
                                <Ionicons name="caret-down" size={24}/>
                            </TouchableOpacity>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Group key="0">
                                <DropdownMenu.Item key="Admin">
                                    <DropdownMenu.ItemTitle>Admin</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item key="Chef">
                                    <DropdownMenu.ItemTitle>Chef</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item key="Cocinero">
                                    <DropdownMenu.ItemTitle>Cocinero</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item key="Pasteleria">
                                    <DropdownMenu.ItemTitle>Pasteleria</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item key="Panaderia">
                                    <DropdownMenu.ItemTitle>Panaderia</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item key="Sartenes">
                                    <DropdownMenu.ItemTitle>Sartenes</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item key="Hornos">
                                    <DropdownMenu.ItemTitle>Hornos</DropdownMenu.ItemTitle>
                                </DropdownMenu.Item>
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                </YStack>
                <YStack gap={10}>
                    <Text>Contrasena</Text>
                    <TextInput
                        returnKeyType="done"
                        placeholderTextColor={theme.color9?.val}
                        style={{
                            backgroundColor: 'white',
                            color: theme.color1?.val,
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 20
                        }}
                    />
                </YStack>
            </YStack>

            <Separator margin={20}/>

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
