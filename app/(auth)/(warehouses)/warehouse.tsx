import {ScrollView, Text, useTheme, View, XStack, YStack} from "tamagui";
import {Fragment, useCallback, useEffect, useLayoutEffect, useState} from "react";
import {ActivityIndicator, Platform, Pressable, RefreshControl, TouchableOpacity} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useHeaderHeight} from "@react-navigation/elements";
import {Stack, useNavigation, useRouter} from "expo-router";
import {useSearchParams} from "expo-router/build/hooks";
import * as DropdownMenu from "zeego/dropdown-menu";
import {Ionicons} from "@expo/vector-icons";


export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();
    const isIos = Platform.OS === 'ios';
    const theme = useTheme();
    const [inputs, setInputs] = useState<any[]>([
        {id: 1, name: "Camarones"},
        {id: 2, name: "Pulpa de fruta"},
    ])

    const [data, setData] = useState<any[]>([
        {id: 1, name: "Carnes", children: 2, warehouses: 0},
    ])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    const params = useSearchParams();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('name'),
        })
    }, [navigation])

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: theme.color2?.val
                    },
                    headerTitleStyle: {
                        color: theme.color12?.val
                    },
                    headerLargeTitle: true,
                    title: params.get('name')!,
                    headerBackTitle: 'Atras',
                    headerSearchBarOptions: {
                        autoCapitalize: 'none',
                        inputType: 'text',
                    },
                    headerRight: () => (
                        <DropdownMenu.Root key="menu">
                            <DropdownMenu.Trigger>
                                <TouchableOpacity>
                                    <Ionicons name="ellipsis-vertical" size={24} style={{color: theme.color12?.val}}/>
                                </TouchableOpacity>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Group key="0">
                                    <DropdownMenu.Item key="edit" onSelect={() => router.push({ pathname: '/detail', params: { mode: 'edit', name: 'Test' } })}>
                                        <DropdownMenu.ItemTitle>Editar</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item key="input" onSelect={() => router.push({ pathname: '/select_input', params: { id: 123 } })}>
                                        <DropdownMenu.ItemTitle>Agregar Insumo</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item key="warehouse" onSelect={() => router.push({ pathname: '/select_warehouse', params: { id: 123 } })}>
                                        <DropdownMenu.ItemTitle>Agregar Sub Almacen</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Group>
                                <DropdownMenu.Group key="1">
                                    <DropdownMenu.Item key="delete" destructive>
                                        <DropdownMenu.ItemTitle>Eliminar</DropdownMenu.ItemTitle>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}
                        >
                            <Ionicons name="arrow-back" size={24} style={{color: theme.color12?.val, marginRight: isIos ? 0 : 10}}/>
                            {/*<Text>Atras</Text>*/}
                        </TouchableOpacity>
                    )
                }}
            />
            <ScrollView
                flex={1}
                backgroundColor="$color2"
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                {
                    loading &&
                    <YStack alignItems="center" marginTop={300} gap={10} justifyContent="center">
                        <ActivityIndicator/>
                        <Text>Cargando...</Text>
                    </YStack>
                }
                {
                    !loading &&
                    <YStack gap={10} marginTop={isIos ? 210 : 0}>
                        <Text paddingHorizontal={20} marginVertical={10}>2 Resultados</Text>

                        {
                            inputs.map(item => (
                                <Pressable key={item.id}  onPress={() => router.push({ pathname: '/input_detail', params: { name: item.name, id: item.id } })}>
                                    <XStack
                                        gap={20}
                                        alignItems="center"
                                        paddingHorizontal={20}
                                        paddingTop={5}
                                        paddingBottom={10}
                                        borderBottomColor="$color5"
                                        borderBottomWidth={.2}
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

                        <Text fontSize={20} margin={20} fontWeight="bold">Sub Almacenes</Text>

                        {
                            data.map(item => (
                                <Pressable key={item.id}  onPress={() => router.push({ pathname: '/warehouse', params: { name: item.name, id: item.id } })}>
                                    <XStack
                                        gap={20}
                                        alignItems="center"
                                        paddingHorizontal={20}
                                        paddingTop={5}
                                        paddingBottom={10}
                                        borderBottomColor="$color5"
                                        borderBottomWidth={.2}
                                    >
                                        <View
                                            backgroundColor="white"
                                            width={50}
                                            height={50}
                                            borderRadius={100}
                                        />
                                        <YStack gap={6}>
                                            <Text fontSize={16}>{item.name}</Text>
                                            <Text fontWeight="bold" color="$color10">insumos: {item.children} </Text>
                                            <Text fontWeight="bold" color="$color10">Sub almacenes: {item.warehouses} </Text>
                                        </YStack>
                                    </XStack>
                                </Pressable>
                            ))
                        }
                    </YStack>
                }
                <View height={bottom}/>
            </ScrollView>
        </Fragment>

    )
}
