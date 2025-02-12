import {tokenCache} from "@/lib/helpers/auth";
import {ClerkLoaded, ClerkProvider} from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


if (!publishableKey) {
    throw new Error(
        'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
}

export default function Providers({children}: { children: React.ReactNode }) {
    // const colorScheme = useColorScheme()
    return (
        <ClerkProvider publishableKey={publishableKey as string} tokenCache={tokenCache}>
            <ClerkLoaded>
                    {children}
            </ClerkLoaded>
        </ClerkProvider>
    )
}
