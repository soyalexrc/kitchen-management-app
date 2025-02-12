import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useSearchParams } from "expo-router/build/hooks";
import { Platform } from "react-native";

export default function Page() {
    const params = useSearchParams();
    const isIos = Platform.OS === 'ios';

    return (
        <ScrollView style={[styles.scrollView, { paddingTop: isIos ? 170 : 0 }]}>
            <View style={styles.container}>
                <Text style={styles.text}>Mantequilla negra</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#f8f8f8",
    },
    container: {
        padding: 16,
    },
    text: {
        fontSize: 18,
        color: "#333",
    },
});
