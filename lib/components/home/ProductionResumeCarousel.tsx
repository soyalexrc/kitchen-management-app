import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel/src/Carousel';
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

const cards = [
    { status: 'In process' },
    { status: 'Completed' },
    { status: 'Rejected' },
];

export function ProductionResumeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { user } = useUser();
    const router = useRouter();

    return (
        <View>
            <Carousel
                loop={false}
                width={width}
                height={190}
                data={cards}
                scrollAnimationDuration={500}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.card, { backgroundColor: '#333' }]}>
                            <Text style={styles.title}>Nombre de receta</Text>
                            <View style={styles.progressBarContainer}>
                                <View
                                    style={[styles.progressBar, {
                                        width: item.status === 'In process' ? '50%' : item.status === 'Completed' ? '100%' : '0%',
                                        backgroundColor: item.status === 'In process' ? '#e5c62d' : item.status === 'Completed' ? '#e5c62d' : 'red'
                                    }]}
                                />
                            </View>
                            <View style={styles.timeContainer}>
                                <View style={styles.timeItem}>
                                    <Ionicons name='time' size={24} color='#fff' />
                                    <Text style={styles.timeText}>9:25 AM</Text>
                                </View>
                                <View style={styles.timeItem}>
                                    <Text style={styles.timeText}>--:--</Text>
                                    <Ionicons name='time' size={24} color='#fff' />
                                </View>
                            </View>
                            <View style={styles.statusContainer}>
                                <View style={[styles.statusBadge, {
                                    backgroundColor: item.status === 'In process' ? '#E2DA93' : item.status === 'Completed' ? '#E2DA93' : '#E29393'
                                }]}
                                >
                                    <Text style={styles.statusText}>{
                                        item.status === 'In process' ? 'En proceso' : item.status === 'Completed' ? 'Pendiente por validación' : 'Rechazada. Contactar Chef'
                                    }</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            {cards.length > 1 && (
                <View style={styles.pagination}>
                    {cards.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index ? styles.activeDot : styles.inactiveDot
                            ]}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width - 20,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    progressBarContainer: {
        height: 5,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 5,
    },
    progressBar: {
        height: '100%',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    timeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    timeText: {
        fontSize: 18,
        color: '#fff',
    },
    statusContainer: {
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
    },
    statusBadge: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 100,
    },
    statusText: {
        color: 'black',
        fontWeight: 'bold',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
    },
    inactiveDot: {
        backgroundColor: '#888',
    },
});
