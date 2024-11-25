import {Text, View} from "tamagui";
import {useSearchParams} from "expo-router/build/hooks";

export default function Page() {
    const params = useSearchParams();

    console.log(params.get('id'))
    return (
        <View>
            <Text>Select warehouse</Text>
        </View>
    )
}
