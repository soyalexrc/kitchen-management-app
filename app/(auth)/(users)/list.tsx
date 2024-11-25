import {ScrollView, Text, View, XStack, YStack} from "tamagui";
import {Fragment, useCallback, useEffect, useState} from "react";
import {ActivityIndicator, Pressable, RefreshControl} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useHeaderHeight} from "@react-navigation/elements";
import {useRouter} from "expo-router";

const data = [
    {id: 1, name: "Pedro Ramirez", role: "Chef", station: ''},
    {id: 2, name: "Juan Perez", role: "Chef", station: ''},
    {id: 3, name: "Maria Rodriguez", role: "Cocinero", station: 'Sartenes'},
    {id: 4, name: "Josefa Lopez", role: "Cocinero", station: 'Panaderia'},
    {id: 5, name: "Pedro Ramirez", role: "Cocinero", station: 'Sartenes'},
    {id: 6, name: "Juan Perez", role: "Cocinero", station: 'Hornos'},
    {id: 7, name: "Maria Rodriguez", role: "Cocinero", station: 'Pasteleria'},
    {id: 8, name: "Josefa Lopez", role: "Cocinero", station: 'Hornos'},
    {id: 9, name: "Pedro Ramirez", role: "Cocinero", station: 'Sartenes'},
    {id: 10, name: "Juan Perez", role: "Cocinero", station: 'Hornos'},
]

export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();

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

    return (
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
                <YStack alignItems="center" marginTop={400} gap={10} justifyContent="center">
                    <ActivityIndicator/>
                    <Text>Cargando...</Text>
                </YStack>
            }
            {
                !loading &&
                <YStack gap={10} marginTop={210}>
                    <Text paddingHorizontal={20} marginVertical={10}>10 Resultados</Text>
                    {
                        data.map(item => (
                            <Pressable key={item.id}  onPress={() => router.push({ pathname: '/detail', params: { mode: 'edit' } })}>
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
                                        <Text fontWeight="bold" color="$color10">{item.role} - {item.station}</Text>
                                    </YStack>
                                </XStack>
                            </Pressable>
                        ))
                    }
                </YStack>
            }
            <View height={bottom}/>
        </ScrollView>
    )
}
