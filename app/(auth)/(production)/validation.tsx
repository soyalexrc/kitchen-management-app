import {Button, ScrollView, Text, useTheme, View, XStack, YStack} from "tamagui";
import {Pressable, TextInput} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useRouter} from "expo-router";
import {useState} from "react";

export default function Page() {
    const theme = useTheme();
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();
    const [inputs, setInputs] = useState<any[]>([
        {id: 1, name: "Harina de trigo", measure: 'Kg', quantity: 1},
        {id: 2, name: "Levadura fresca", measure: 'Gr', quantity: 500},
        {id: 3, name: "Aceite de oliva", measure: 'Lts', quantity: 0.25}
    ])

    return (
        <ScrollView flex={1} backgroundColor="$color2">
            <YStack gap={10} marginTop={20} paddingHorizontal={20}>
                <View
                    width={50}
                    height={50}
                    borderRadius={100}
                    backgroundColor="white"
                />
                <Text fontSize={26}>Nombre de la receta en dos lineas porque es bastante extensa</Text>
                <Text marginTop={30}>Pedro Perez - Cocinero - Sartenes</Text>
            </YStack>

            <YStack paddingHorizontal={20} marginTop={20}>


                <YStack gap={10} marginTop={30}>
                    <Text fontSize={18} marginBottom={10}>Total de insumos utilizados</Text>

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

                                    <XStack gap={10} alignItems="center">
                                        <View backgroundColor={theme.color10?.val} paddingHorizontal={10} borderWidth={1} borderColor={index === 0 ? 'green' : index === 1 ? 'orangered' : 'red'} borderRadius={100}>
                                            <Text color={theme.color1?.val} textAlign="center">{item.quantity}</Text>
                                        </View>
                                        <Text>{item.measure}</Text>
                                    </XStack>
                                </XStack>
                            </Pressable>
                        ))
                    }
                </YStack>
            </YStack>

            <Button marginHorizontal={20} marginVertical={40} onPress={() => router.back()}>
                <Text>Aprobar</Text>
            </Button>

            <View height={bottom}/>
        </ScrollView>
    )
}
