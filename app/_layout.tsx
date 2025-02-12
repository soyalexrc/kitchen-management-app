import {Slot, Stack, useRouter, useSegments} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useCallback, useEffect, useState} from "react";
import * as Font from 'expo-font';
import {Entypo, Ionicons} from "@expo/vector-icons";
import {View} from "react-native";
import Providers from "@/lib/components/Providers";
import {useFonts} from "expo-font";
import {useAuth} from "@clerk/clerk-expo";
import {TouchableOpacity} from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true
});


function InitialLayout() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
    const {isLoaded, isSignedIn} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync(Entypo.font);
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        if (!isLoaded || !appIsReady) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (isSignedIn && !inAuthGroup) {
            console.log('here')
            router.replace('/(auth)/home');
        } else if (!isSignedIn) {
            router.replace('/');
        }
    }, [isSignedIn, appIsReady]);


    const onLayoutRootView = useCallback(() => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            SplashScreen.hide();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    if (!loaded || !isLoaded) {
        return <Slot />;
    }
    return (
        <View style={{ flex: 1 }}
              onLayout={onLayoutRootView}
        >
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false
                    }}
                />
                {/*<Stack.Screen*/}
                {/*    name="login"*/}
                {/*    options={{*/}
                {/*        presentation: 'modal',*/}
                {/*        title: '',*/}
                {/*        headerTitleStyle: {*/}
                {/*            fontFamily: 'mon-sb'*/}
                {/*        },*/}
                {/*        headerLeft: () => (*/}
                {/*            <TouchableOpacity onPress={() => router.back()}>*/}
                {/*                <Ionicons name="close-outline" size={28} />*/}
                {/*            </TouchableOpacity>*/}
                {/*        ),*/}
                {/*    }}*/}
                {/*/>*/}
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
        </View>
    );
}

export default function RootLayout() {
    return (
        <Providers>
            <InitialLayout/>
        </Providers>
    );
}
