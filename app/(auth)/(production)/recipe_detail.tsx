import { useState, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, ScrollView, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useNavigation, useSearchParams } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Page() {
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const params = useSearchParams();
    const navigation = useNavigation();
    const [inputs, setInputs] = useState([
        { id: 1, name: "Harina de trigo", measure: 'Kg', quantity: 1 },
        { id: 2, name: "Levadura fresca", measure: 'Gr', quantity: 500 },
        { id: 3, name: "Aceite de oliva", measure: 'Lts', quantity: 0.25 }
    ]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.get('name'),
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagePlaceholder} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Nombre de la receta</Text>
                <View style={styles.ingredientsContainer}>
                    <Text style={styles.subtitle}>Insumos</Text>
                    {inputs.map((item) => (
                        <Pressable key={item.id} style={styles.ingredientItem}>
                            <View style={styles.ingredientIcon} />
                            <Text style={styles.ingredientText}>{item.name}</Text>
                            <Text>{item.quantity} {item.measure}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
            <Button title="Volver" onPress={() => router.back()} />
            <View style={{ height: bottom }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    imagePlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 50,
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    ingredientsContainer: {
        marginTop: 30,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    ingredientIcon: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    ingredientText: {
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
    },
});
