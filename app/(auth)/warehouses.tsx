import {Button, Text, View} from "tamagui";
import {useAuth} from "@clerk/clerk-expo";

export default function Page() {
    const {signOut} = useAuth();

    return (
        <View>
            <Text>warehouses page</Text>
            <Button onPress={() => signOut()}>
                signOut
            </Button>
        </View>
    )
}
