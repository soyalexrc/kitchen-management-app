import {Button, ScrollView, Text, View, XStack, YStack} from "tamagui";
import {useLayoutEffect} from "react";
import {useSearchParams} from "expo-router/build/hooks";
import {useNavigation, useRouter} from "expo-router";
import {TextInput, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Page() {
    const params = useSearchParams();
    const navigation = useNavigation()
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('name'),
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

                <XStack gap={20}>
                    <YStack gap={10} flex={1}>
                        <Text>Precio Kg - L</Text>
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
                    <YStack gap={10} flex={1}>
                        <Text>Cantidad</Text>
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
                </XStack>
                <XStack gap={20}>
                    <YStack gap={10} flex={1}>
                        <Text>Costo</Text>
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
                    <YStack gap={10} flex={1}>
                        <Text>Merma</Text>
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
                </XStack>
                <XStack gap={20}>
                    <YStack gap={10} flex={1}>
                        <Text>Merma 2</Text>
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
                    <YStack gap={10} flex={1}>
                        <Text>Costo total</Text>
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
                </XStack>
            </YStack>

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
