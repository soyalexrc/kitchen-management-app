import {ScrollView, Text, View} from "tamagui";
import {useSearchParams} from "expo-router/build/hooks";
import {Platform} from "react-native";

export default function Page() {
    const params = useSearchParams();
    const isIos = Platform.OS === 'ios';

    return (
        <ScrollView paddingTop={isIos ? 170 : 0} backgroundColor="$color2">
            <View>
                <Text>Hongos</Text>
            </View>

        </ScrollView>
    )
}
