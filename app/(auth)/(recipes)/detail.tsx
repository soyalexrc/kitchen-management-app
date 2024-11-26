import {Button, ScrollView, Separator, Text, useTheme, View, XStack, YStack, ZStack} from "tamagui";
import {Pressable, TextInput, Touchable, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import * as DropdownMenu from "zeego/dropdown-menu";
import {Stack, useNavigation, useRouter} from "expo-router";
import {useSearchParams} from "expo-router/build/hooks";
import {Fragment, useLayoutEffect, useState} from "react";

export default function Page() {
    const theme = useTheme();
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();
    const params = useSearchParams();
    const navigation = useNavigation();
    const [inputs, setInputs] = useState<any[]>([
        {id: 1, name: "Harina de trigo"},
        {id: 2, name: "Levadura fresca"},
    ])
    const [data, setData] = useState<any[]>([
        {id: 3, name: "Mantequilla Wagyu"},
    ])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('mode') === 'add' ? 'Nueva Receta' : params.get('name'),
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
        <Fragment>
            <Stack.Screen
                options={{
                    title: 'Detalle',
                    headerStyle: {
                        backgroundColor: theme.color2?.val
                    },
                    headerTitleStyle: {
                        color: theme.color12?.val
                    },
                }}
            />
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

                <Separator margin={20}/>

                <YStack gap={10} paddingHorizontal={20}>
                    <XStack justifyContent="space-between" alignItems="center">
                        <Text fontSize={24}>Insumos</Text>
                        <TouchableOpacity
                            onPress={() => router.push('/select_input')}
                            style={{ flexDirection: 'row', backgroundColor: theme.color10?.val, padding: 6, borderRadius: 100 }}>
                            <Ionicons name="add" size={20} color={theme.color12?.val} />
                            <Text>Agregar</Text>
                        </TouchableOpacity>
                    </XStack>
                    {
                        inputs.map((item, index) => (
                            <Pressable key={item.id}>
                                <XStack
                                    gap={20}
                                    alignItems="center"
                                    paddingTop={5}
                                    paddingBottom={10}
                                    borderBottomColor="$color5"
                                    borderBottomWidth={index < (inputs.length - 1) ? .2 : 0}
                                >
                                    <View
                                        backgroundColor="white"
                                        width={30}
                                        height={30}
                                        borderRadius={100}
                                    />
                                    <YStack gap={6}>
                                        <Text fontSize={16}>{item.name}</Text>
                                    </YStack>
                                </XStack>
                            </Pressable>
                        ))
                    }
                </YStack>


                <Separator margin={20}/>

                <YStack gap={10} paddingHorizontal={20}>
                    <XStack justifyContent="space-between" alignItems="center">
                        <Text fontSize={24}>Sub Recetas</Text>
                        <TouchableOpacity
                            onPress={() => router.push('/select_recipe')}
                            style={{ flexDirection: 'row', backgroundColor: theme.color10?.val, padding: 6, borderRadius: 100 }}>
                            <Ionicons name="add" size={20} color={theme.color12?.val} />
                            <Text>Agregar</Text>
                        </TouchableOpacity>
                    </XStack>
                    {
                        data.map((item, index) => (
                            <Pressable key={item.id}
                                       onPress={() => router.push({pathname: '/detail', params: {mode: 'edit', name: item.name}})}>
                                <XStack
                                    gap={20}
                                    alignItems="center"
                                    paddingTop={5}
                                    paddingBottom={10}
                                    borderBottomColor="$color5"
                                    borderBottomWidth={index < (data.length - 1) ? .2 : 0}
                                >
                                    <View
                                        backgroundColor="white"
                                        width={50}
                                        height={50}
                                        borderRadius={100}
                                    />
                                    <Text fontSize={18}>{item.name}</Text>
                                </XStack>
                            </Pressable>
                        ))
                    }
                </YStack>

                <Separator margin={20}/>

                <Button margin={20} onPress={() => router.back()}>
                    <Text>Guardar cambios</Text>
                </Button>

                <View height={bottom}/>
            </ScrollView>
        </Fragment>
    )
}
