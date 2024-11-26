import {Button, ScrollView, Separator, Text, useTheme, View, XStack, YStack, ZStack} from "tamagui";
import {Pressable, TextInput, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import * as DropdownMenu from "zeego/dropdown-menu";
import {useNavigation, useRouter} from "expo-router";
import {useSearchParams} from "expo-router/build/hooks";
import {useLayoutEffect, useState} from "react";

export default function Page() {
    const theme = useTheme();
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();
    const params = useSearchParams();
    const navigation = useNavigation();
    const [inputs, setInputs] = useState<any[]>([
        {id: 1, name: "Harina de trigo", measure: 'Kg', quantity: 1},
        {id: 2, name: "Levadura fresca", measure: 'Gr', quantity: 500},
        {id: 3, name: "Aceite de oliva", measure: 'Lts', quantity: 0.25}
    ])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('name'),
        })
    }, [navigation])

    return (
        <ScrollView flex={1} backgroundColor="$color2">
            <XStack justifyContent="center" marginTop={50}>
                <View
                    width={120}
                    height={120}
                    borderRadius={100}
                    backgroundColor="white"
                />
            </XStack>

            <YStack paddingHorizontal={20} marginTop={50}>
                <Text fontSize={28}>Nombre de la receta</Text>

                <YStack gap={10} marginTop={30}>
                    <Text fontSize={24}>Insumos</Text>

                    {
                        inputs.map((item, index) => (
                            <Pressable key={item.id}>
                                <XStack
                                    alignItems="center"
                                    justifyContent="space-between"
                                    paddingTop={5}
                                    paddingBottom={10}
                                    borderBottomColor="$color5"
                                    borderBottomWidth={.2}
                                >
                                    <XStack alignItems="center" gap={20}>
                                        <View
                                            backgroundColor="white"
                                            width={30}
                                            height={30}
                                            borderRadius={100}
                                        />

                                        <Text fontSize={16}>{item.name}</Text>
                                    </XStack>

                                    <XStack gap={6}>
                                        <Text>{item.quantity}</Text>
                                        <Text>{item.measure}</Text>
                                    </XStack>
                                </XStack>
                            </Pressable>
                        ))
                    }
                </YStack>
            </YStack>

            <Button margin={20} onPress={() => router.back()}>
                <Text>Volver</Text>
            </Button>

            <View height={bottom}/>
        </ScrollView>
    )
}
