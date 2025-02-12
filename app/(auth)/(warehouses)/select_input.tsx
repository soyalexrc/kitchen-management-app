import { ScrollView, Text, View, Platform, StyleSheet } from "react-native";
import { useSearchParams } from "expo-router";

export default function Page() {
    const params = useSearchParams();
    const isIos = Platform.OS === "ios";

    return (
        <ScrollView style={[styles.scrollView, { paddingTop: isIos ? 170 : 0 }]}>
            <View style={styles.container}>
                <Text style={styles.text}>Camaron</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#F5F5F5", // Reemplazo de $color2
    },
    container: {
        padding: 20,
    },
    text: {
        fontSize: 18,
    },
});
