import {
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";

export default function Index() {
    const { top, bottom } = useSafeAreaInsets();
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { signIn, setActive, isLoaded } = useSignIn();
    const [loading, setLoading] = useState(false);

    const onSignInPress = async () => {
        if (!isLoaded) return;
        if (email.length < 1) {
            Alert.alert('Error', 'Correo electrónico o Nombre de usuario requerido');
            return;
        }

        if (password.length < 1) {
            Alert.alert('Error', 'Contraseña requerida');
            return;
        }

        setLoading(true);

        try {
            const signInAttempt = await signIn.create({
                identifier: email,
                password,
            });

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        } catch (error: any) {
            Alert.alert(error.errors[0].message, error.errors[0].longMessage);
        } finally {
            Keyboard?.dismiss();
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={[styles.innerContainer, { paddingTop: top }]}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoBackground}>
                        <Image
                            source={require('../assets/images/auth/auth-icon.png')}
                            style={styles.logo}
                        />
                    </View>
                </View>

                <View style={[styles.formContainer, { paddingBottom: bottom + 20 }]}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Correo electrónico o Nombre de usuario"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                            placeholderTextColor="#666"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Contraseña"
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            autoCapitalize='none'
                            placeholderTextColor="#666"
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity
                        onPress={onSignInPress}
                        disabled={loading}
                        style={[
                            styles.button,
                            { backgroundColor: loading ? '#ccc' : 'blue', opacity: loading ? 0.7 : 1 }
                        ]}
                    >
                        {loading && <ActivityIndicator color="#fff" />}
                        <Text style={styles.buttonText}>{loading ? 'Cargando...' : 'Ingresar'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    innerContainer: {
        flex: 1,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    logoBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 120,
        width: 120,
        borderRadius: 12,
    },
    logo: {
        width: 80,
        height: 80,
        tintColor: '#fff',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#333',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingTop: 50,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    inputContainer: {
        gap: 15,
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 12,
        borderRadius: 12,
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 12,
        marginHorizontal: 20,
        marginVertical: 40,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
