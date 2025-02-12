import { ScrollView, Text, View, Platform, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
    const params = useLocalSearchParams();
    const isIos = Platform.OS === "ios";

    return (
        <ScrollView style={[styles.container, { paddingTop: isIos ? 170 : 0 }]}>
            <View style={styles.content}>
                <Text style={styles.title}>Salsas</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
