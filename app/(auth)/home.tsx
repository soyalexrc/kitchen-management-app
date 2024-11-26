import {Button, ScrollView, View, XStack, YStack} from "tamagui";
import {useAuth, useUser} from "@clerk/clerk-expo";
import {Link} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Header} from "@/lib/components/home";
import {ProductionResumeCarousel} from "@/lib/components/home/ProductionResumeCarousel";

export default function Page() {
    const {top} = useSafeAreaInsets();

    return (
        <View flex={1} paddingTop={top} backgroundColor="$color2">
            <View paddingHorizontal={20}>
                <Header/>
            </View>
            <ScrollView flex={1}>
                <View>
                    <ProductionResumeCarousel/>
                </View>
                <YStack flex={2} gap={20} paddingHorizontal={20}>
                    <XStack gap={20}>
                        <Link style={{flex: 1}} href="/(users)/list" asChild>
                            <Button>Usuarios</Button>
                        </Link>
                        <Link style={{flex: 1}} href="/(recipes)/list" asChild>
                            <Button>Recetas</Button>
                        </Link>
                    </XStack>
                    <XStack gap={20}>
                        <Link style={{flex: 1}} href="/(warehouses)/list" asChild>
                            <Button>Almacenes</Button>
                        </Link>
                        <Link style={{flex: 1}} href="/(production)/list" asChild>
                            <Button>Produccion</Button>
                        </Link>
                    </XStack>
                </YStack>
            </ScrollView>
        </View>
    )
}
