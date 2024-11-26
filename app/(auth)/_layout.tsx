import {Stack} from "expo-router";
import {Button} from "tamagui";
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" options={{ headerShown: false }}/>
            <Stack.Screen name="/(users)"/>
            <Stack.Screen name="/(production)"/>
            <Stack.Screen name="/(recipes)"/>
            <Stack.Screen name="/(warehouses)"/>
        </Stack>
    )
}
