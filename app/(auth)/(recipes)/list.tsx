import {ScrollView, Text, View, XStack, YStack} from "tamagui";
import {Fragment, useCallback, useEffect, useState} from "react";
import {ActivityIndicator, Platform, Pressable, RefreshControl} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useHeaderHeight} from "@react-navigation/elements";
import {useRouter} from "expo-router";

const data = [
    {id: 1, name: "Pan baguete masa madre"},
    {id: 2, name: "Mantequilla Wagyu"},
    {id: 3, name: "Helado de chocolate"},
]

export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();
    const isIos = Platform.OS === 'ios';

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
                <YStack alignItems="center" marginTop={300} gap={10} justifyContent="center">
                    <ActivityIndicator/>
                    <Text>Cargando...</Text>
                </YStack>
            }
            {
                !loading &&
                <YStack gap={10} marginTop={isIos ? 210 : 0}>
                    <Text paddingHorizontal={20} marginVertical={10}>3 Resultados</Text>
                    {
                        data.map(item => (
                            <Pressable key={item.id}
                                       onPress={() => router.push({pathname: '/detail', params: {mode: 'edit', name: item.name}})}>
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
                                    <Text fontSize={18}>{item.name}</Text>
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
