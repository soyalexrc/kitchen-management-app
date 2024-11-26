import {Button, ScrollView, Text, useTheme, View, XStack, YStack} from "tamagui";
import {Fragment, useCallback, useEffect, useLayoutEffect, useState} from "react";
import {
    ActivityIndicator,
    Dimensions,
    Platform,
    Pressable,
    RefreshControl,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Stack, useNavigation, useRouter} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {useUser} from "@clerk/clerk-expo";

const { width, height } = Dimensions.get('window');


export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const {user} = useUser();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const processes: number = 1;
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

    const navigation = useNavigation()

    useLayoutEffect(() => {
        if (user?.publicMetadata?.role === 'Chef' || user?.publicMetadata?.role === 'Admin') {
            navigation.setOptions({
                headerSearchBarOptions: {
                    autoCapitalize: 'none',
                    inputType: 'text',
                },
                headerRight: () => (
                    <TouchableOpacity>
                        <Ionicons name="filter" size={24} style={{color: theme.color12?.val}}/>
                    </TouchableOpacity>
                ),
            })
        } else {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity>
                        <Ionicons name="list" size={24} style={{color: theme.color12?.val}}/>
                    </TouchableOpacity>
                ),
            })
        }
    }, [navigation]);

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
                    title: 'Produccion',
                    headerBackTitle: 'Atras',
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
            {
                loading &&
                <YStack alignItems="center" flex={1} backgroundColor="$color2" gap={10} justifyContent="center">
                    <ActivityIndicator/>
                    <Text>Cargando...</Text>
                </YStack>
            }
            {
                !loading && user?.publicMetadata?.role !== 'Cocinero' &&
                <ScrollView
                    flex={1}
                    backgroundColor="$color2"
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }>

                    <YStack gap={10} marginTop={isIos ? 210 : 0}>
                        <Text paddingHorizontal={20} marginVertical={10}>2 Resultados</Text>

                        {
                            inputs.map(item => (
                                <Pressable key={item.id} onPress={() => router.push({
                                    pathname: '/input_detail',
                                    params: {name: item.name, id: item.id}
                                })}>
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
                                <Pressable key={item.id} onPress={() => router.push({
                                    pathname: '/warehouse',
                                    params: {name: item.name, id: item.id}
                                })}>
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
                                            <Text fontWeight="bold" color="$color10">Sub
                                                almacenes: {item.warehouses} </Text>
                                        </YStack>
                                    </XStack>
                                </Pressable>
                            ))
                        }
                    </YStack>
                    <View height={bottom}/>
                </ScrollView>
            }

            {
                !loading && user?.publicMetadata?.role === 'Cocinero' &&
                <Fragment>
                    {
                        processes === 0 &&
                        <YStack gap={10} flex={1} backgroundColor="$color2" justifyContent="center" alignItems="center">
                            <YStack alignItems="center" gap={16}>
                                <View
                                    backgroundColor="white"
                                    width={120}
                                    height={120}
                                    borderRadius={100}
                                />
                                <Text>No tienes procesos abiertos.</Text>
                                <Button onPress={() => router.push('/select_recipe')} width={250}>Abrir proceso</Button>
                            </YStack>
                        </YStack>
                    }
                    {
                        processes === 1 &&
                        <YStack gap={10} flex={1} backgroundColor="$color2" paddingBottom={bottom} justifyContent="space-between" alignItems="center">
                            <View />
                            <YStack gap={16}>
                                <Text fontSize={28}>Tienes una receta en proceso</Text>
                                <Pressable
                                    onPress={() => router.push({ pathname: '/recipe_detail', params: { name: 'Detalle de receta' }})}
                                    style={{
                                        backgroundColor: theme.color12?.val,
                                        width: width - 20,
                                        borderRadius: 15,
                                        paddingVertical: 15,
                                        paddingHorizontal: 20
                                    }}>
                                    <Text color="color1" fontSize={20} fontWeight="bold" marginBottom={20}>Nombre de receta</Text>
                                    <View style={styles.progressBar}>
                                        <View
                                            style={[styles.progress, { width: '50%' }]} />
                                    </View>
                                    <XStack justifyContent="space-between" marginTop={10}>
                                        <XStack alignItems="center" gap={6}>
                                            <Ionicons name='time' size={24} color={theme.color1?.val} />
                                            <Text fontSize={18} color={theme.color1?.val}>9:25 AM</Text>
                                        </XStack>
                                        <XStack alignItems="center" gap={6}>
                                            <Text fontSize={18} color={theme.color1?.val}>--:--</Text>
                                            <Ionicons name='time' size={24} color={theme.color1?.val} />
                                        </XStack>
                                    </XStack>
                                </Pressable>
                                <XStack alignItems="center" gap={6} paddingHorizontal={10}>
                                    <Ionicons name="information-circle" size={24} color={theme.color12?.val} />
                                    <Text>Presiona la receta para ver el detalle</Text>
                                </XStack>
                            </YStack>
                            <YStack gap={16} alignItems="center">
                                <Button onPress={() => router.push('/closing_process')} width={260}>Cerrar proceso</Button>
                                <TouchableOpacity onPress={() => router.back()}>
                                    <Text>Volver</Text>
                                </TouchableOpacity>
                            </YStack>
                        </YStack>
                    }
                </Fragment>
            }
        </Fragment>

    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 5,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 5,
    },
    progress: {
        height: '100%',
        backgroundColor: '#e5c62d',
    }
});

