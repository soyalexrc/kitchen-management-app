import { ScrollView, Text, View, StyleSheet, Platform } from "react-native";
import { useSearchParams } from "expo-router/build/hooks";

export default function Page() {
    const params = useSearchParams();
    const isIos = Platform.OS === 'ios';

    return (
        <ScrollView style={[styles.container, { paddingTop: isIos ? 170 : 0 }]}>
            <View>
                <Text>Hongos</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
    },
});
