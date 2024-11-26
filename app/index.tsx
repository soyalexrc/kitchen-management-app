import {
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity
} from "react-native";
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
            Keyboard?.dismiss();
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        }
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View flex={1} backgroundColor="$color2" paddingTop={top}>
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

                <YStack gap={40} backgroundColor="$color1" flex={1} marginTop={20} paddingHorizontal={20}  paddingBottom={bottom + 20} paddingTop={50} borderTopRightRadius={20} borderTopLeftRadius={20}>
                    <YStack gap={15}>
                        <TextInput
                            placeholder="Correo electrónico o Nombre de usuario"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                            placeholderTextColor={theme.color1?.val}
                            style={{
                                backgroundColor: theme.color11?.val,
                                color: theme.color1?.val,
                                padding: 10,
                                borderRadius: 12,
                            }}
                        />
                        <TextInput
                            placeholder="Contraseña"
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            autoCapitalize='none'
                            placeholderTextColor={theme.color1?.val}
                            style={{
                                backgroundColor: theme.color11?.val,
                                color: theme.color1?.val,
                                padding: 10,
                                borderRadius: 12,
                            }}
                        />
                    </YStack>
                    <View flex={1} />
                    <Button
                        onPress={onSignInPress}
                        disabled={loading}
                        style={{
                            backgroundColor: loading ? theme.color3?.val : theme.color4?.val,
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading && <ActivityIndicator />}
                        <Text fontSize={18}>{ loading ? 'Cargando...' : 'Ingresar' }</Text>
                    </Button>
                </YStack>
            </View>
        </KeyboardAvoidingView>
    );
}
