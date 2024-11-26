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
    const processes: number = 2;
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
                headerLargeTitle: true,
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
                        <Text paddingHorizontal={20} marginVertical={10}>3 Resultados</Text>



                        <Text fontSize={20} margin={20} fontWeight="bold">En proceso</Text>

                        <Pressable
                            onPress={() => router.push('/validation')}
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

                        <Pressable
                            onPress={() => router.push('/validation')}
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
                                    <Text fontSize={18} color={theme.color1?.val}>3:30 PM</Text>
                                </XStack>
                                <XStack alignItems="center" gap={6}>
                                    <Text fontSize={18} color={theme.color1?.val}>--:--</Text>
                                    <Ionicons name='time' size={24} color={theme.color1?.val} />
                                </XStack>
                            </XStack>
                        </Pressable>

                        <Text fontSize={20} margin={20} fontWeight="bold">Completados</Text>

                        <Pressable
                            onPress={() => router.push('/validation')}
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
                                    style={{ width: '100%', height: '100%', backgroundColor: '#5DE72F' }} />
                            </View>
                            <XStack justifyContent="space-between" marginTop={10}>
                                <XStack alignItems="center" gap={6}>
                                    <Ionicons name='time' size={24} color={theme.color1?.val} />
                                    <Text fontSize={18} color={theme.color1?.val}>9:25 AM</Text>
                                </XStack>
                                <XStack alignItems="center" gap={6}>
                                    <Text fontSize={18} color={theme.color1?.val}>12:55 PM</Text>
                                    <Ionicons name='time' size={24} color={theme.color1?.val} />
                                </XStack>
                            </XStack>
                        </Pressable>
                    </YStack>
                    <View height={bottom + 50}/>
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
                        <YStack gap={10} flex={1} backgroundColor="$color2" paddingBottom={bottom + 20} justifyContent="space-between" alignItems="center">
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
                    {
                        processes === 2 &&
                        <YStack gap={10} flex={1} backgroundColor="$color2" paddingBottom={bottom + 20} justifyContent="space-between" alignItems="center">
                            <View />
                            <YStack gap={16} alignItems="center">
                                <Ionicons name="checkmark-circle" size={150} color="green" />
                                <Text fontSize={28}>Tu receta esta pendiente por revision</Text>
                                <View
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
                                            style={[styles.progress, { width: '100%' }]} />
                                    </View>
                                    <XStack justifyContent="space-between" marginTop={10}>
                                        <XStack alignItems="center" gap={6}>
                                            <Ionicons name='time' size={24} color={theme.color1?.val} />
                                            <Text fontSize={18} color={theme.color1?.val}>9:25 AM</Text>
                                        </XStack>
                                        <XStack alignItems="center" gap={6}>
                                            <Text fontSize={18} color={theme.color1?.val}>13:45</Text>
                                            <Ionicons name='time' size={24} color={theme.color1?.val} />
                                        </XStack>
                                    </XStack>
                                </View>
                            </YStack>
                            <YStack gap={16} alignItems="center">
                                <Button  width={260}>Entendido</Button>
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

