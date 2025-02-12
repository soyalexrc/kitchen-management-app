import { ScrollView, Text, View, StyleSheet, Platform } from "react-native";
import { useSearchParams } from "expo-router/build/hooks";

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
        backgroundColor: "#F5F5F5", // Ajusta el color según el equivalente de $color2
    },
    container: {
        padding: 20,
    },
    text: {
        fontSize: 16,
        color: "#000", // Ajusta el color si es necesario
    },
});
