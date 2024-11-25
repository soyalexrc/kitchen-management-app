import {Alert, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity} from "react-native";
import {useTheme, View, Text, Button, XStack, Image, YStack} from "tamagui";
import {Link, useRouter} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";
import {useSignIn} from "@clerk/clerk-expo";

export default function Index() {
    const theme = useTheme();
    const {top, bottom} = useSafeAreaInsets();
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {signIn, setActive, isLoaded} = useSignIn();
    const [loading, setLoading] = useState(false);

    const onSignInPress = async () => {
        if (!isLoaded) return;
        if (email.length < 1) {
            Alert.alert('Error', 'Correo electrónico o Nombre de usuario requerido');
            return
        }

        if (password.length < 1) {
            Alert.alert('Error', 'Contraseña requerida');
            return
        }

        setLoading(true);

        try {
            const signInAttempt = await signIn.create({
                identifier: email,
                password,
            })

            if (signInAttempt.status === 'complete') {
                await setActive({session: signInAttempt.createdSessionId})
            } else {
                // If the status is not complete, check why. User may need to
                // complete further steps.
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (error: any) {
            Alert.alert(error.errors[0].message, error.errors[0].longMessage);
        } finally {
            setLoading(false);
        }
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View flex={1} backgroundColor="$color2" paddingTop={top} paddingBottom={bottom} paddingHorizontal={20}>
                <XStack justifyContent="center" marginTop={50}>
                    <XStack
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor="$color1"
                        height={120}
                        width={120}
                        borderRadius={12}
                    >
                        <Image
                            source={require('../assets/images/auth/auth-icon.png')}
                            width={125}
                            height={125}
                            borderRadius={12}
                        />
                    </XStack>
                </XStack>

                <View flex={1}/>
                <YStack gap={40}>
                    {/*<Link*/}
                    {/*    href={{*/}
                    {/*        pathname: '/login',*/}
                    {/*        params: {type: 'register'},*/}
                    {/*    }}*/}
                    {/*    asChild>*/}
                    <YStack gap={15}>
                        <TextInput
                            placeholder="Correo electrónico o Nombre de usuario"
                            placeholderTextColor={theme.color5?.val}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                            style={{
                                backgroundColor: theme.color1?.val,
                                color: theme.color12?.val,
                                padding: 10,
                                borderRadius: 12,
                            }}
                        />
                        <TextInput
                            placeholder="Contraseña"
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize='none'
                            placeholderTextColor={theme.color5?.val}
                            style={{
                                backgroundColor: theme.color1?.val,
                                color: theme.color12?.val,
                                padding: 10,
                                borderRadius: 12,
                            }}
                        />
                    </YStack>
                    <Button onPress={onSignInPress}>
                        <Text fontSize={18}>Ingresar</Text>
                    </Button>
                    {/*</Link>*/}
                    {/*<Text textAlign="center">O</Text>*/}
                    {/*<Link*/}
                    {/*    href={{*/}
                    {/*        pathname: '/login',*/}
                    {/*        params: {type: 'login'},*/}
                    {/*    }}*/}
                    {/*    asChild>*/}
                    {/*    <TouchableOpacity>*/}
                    {/*        <Text textAlign="center">Pedir acceso</Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</Link>*/}
                </YStack>
            </View>
        </KeyboardAvoidingView>
    );
}
