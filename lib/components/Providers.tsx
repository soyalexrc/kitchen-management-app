import {TamaguiProvider} from "tamagui";
import {config} from "@/lib/styles/tamagui-config";
import {useColorScheme} from "react-native";
import {tokenCache} from "@/lib/helpers/auth";
import {ClerkLoaded, ClerkProvider} from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


if (!publishableKey) {
    throw new Error(
        'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
}

export default function Providers({children}: { children: React.ReactNode }) {
    const colorScheme = useColorScheme()
    return (
        <ClerkProvider publishableKey={publishableKey as string} tokenCache={tokenCache}>
            <ClerkLoaded>
                <TamaguiProvider config={config} defaultTheme={colorScheme as string}>
                    {children}
                </TamaguiProvider>
            </ClerkLoaded>
        </ClerkProvider>
    )
}
