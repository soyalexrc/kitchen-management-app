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
            <XStack alignItems="center" gap={10} marginTop={20} paddingHorizontal={20}>
                <View
                    width={50}
                    height={50}
                    borderRadius={100}
                    backgroundColor="white"
                />
                <Text fontSize={26}>Nombre de la receta</Text>
            </XStack>

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
                                        <TextInput
                                            keyboardType="numeric"
                                            returnKeyType="done"
                                            style={{
                                                backgroundColor: 'white',
                                                borderRadius: 10,
                                                padding: 6,
                                                width: 50
                                            }}
                                        />
                                        <Text>{item.measure}</Text>
                                    </XStack>
                                </XStack>
                            </Pressable>
                        ))
                    }
                </YStack>
            </YStack>

            <Button marginHorizontal={20} marginVertical={40} onPress={() => router.back()}>
                <Text>Completar</Text>
            </Button>

            <View height={bottom}/>
        </ScrollView>
    )
}
