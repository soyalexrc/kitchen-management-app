import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Swiper from 'react-native-swiper'

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
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                loop={false}
                paginationStyle={{ bottom: 10 }}
                dotStyle={{ backgroundColor: '#888', width: 8, height: 8, borderRadius: 4 }}
                activeDotStyle={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5 }}
                horizontal={true} // Enable horizontal swiping
            >
                {
                    cards.map(item => (
                       <View key={item.status} style={styles.slideWrapper}>
                           <View  style={[styles.slide]}>
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
                       </View>
                    ))
                }
            </Swiper>
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

    slideWrapper: {
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },

    wrapper: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        width: width * 0.85, // Make slides smaller for centering effect
        height: 220,
        borderRadius: 20,
        overflow: 'hidden',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center', // Centers slide
        backgroundColor: 'gray'
    },
    text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
});
