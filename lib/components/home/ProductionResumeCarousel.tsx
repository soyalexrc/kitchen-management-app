import {useState} from 'react';
import {Text, useTheme, View, XStack} from 'tamagui';
import Carousel from 'react-native-reanimated-carousel/src/Carousel';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {useUser} from "@clerk/clerk-expo";
import {Ionicons} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";

const {width, height} = Dimensions.get('window');

const cards = [
    {
        status: 'In process',
    },
    {
        status: 'Completed',
    },
    {
        status: 'Rejected',
    },
]

export function ProductionResumeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const {user} = useUser();
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
                renderItem={({item}) => {
                    return (
                        <View
                            style={{
                                backgroundColor: theme.color12?.val,
                                width: width - 20,
                                borderRadius: 15,
                                paddingVertical: 15,
                                paddingHorizontal: 20
                            }}>
                            <Text color="color1" fontSize={20} fontWeight="bold" marginBottom={20}>Nombre de
                                receta</Text>
                            <View style={styles.progressBar}>
                                <View
                                    style={{
                                        height: '100%',
                                        width: item.status === 'In process' ? '50%' : item.status === 'Completed' ? '100%' : '0%',
                                        backgroundColor: item.status === 'In process' ? '#e5c62d' : item.status === 'Completed' ? '#e5c62d' : 'red'
                                    }}
                                />
                            </View>
                            <XStack justifyContent="space-between" marginTop={10}>
                                <XStack alignItems="center" gap={6}>
                                    <Ionicons name='time' size={24} color={theme.color1?.val}/>
                                    <Text fontSize={18} color={theme.color1?.val}>9:25 AM</Text>
                                </XStack>
                                <XStack alignItems="center" gap={6}>
                                    <Text fontSize={18} color={theme.color1?.val}>--:--</Text>
                                    <Ionicons name='time' size={24} color={theme.color1?.val}/>
                                </XStack>
                            </XStack>
                            {/*<Link asChild href={`/(auth)/(production)/closing_process`}>*/}
                                <XStack justifyContent="center" marginTop={10}>
                                    <View backgroundColor={item.status === 'In process' ? '#E2DA93' : item.status === 'Completed' ? '#E2DA93' : '#E29393'} paddingVertical={6} paddingHorizontal={12}
                                          borderRadius={100}>
                                        <Text color="black" fontWeight="bold">{ item.status === 'In process' ? 'En proceso' : item.status === 'Completed' ? 'Pendiente por valiacion' : 'Rechazada. Contactar Chef' }</Text>
                                    </View>
                                </XStack>
                            {/*</Link>*/}
                        </View>
                    )
                }}
            />
            {
                cards.length > 1 &&
                <View style={styles.pagination}>
                    {cards.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index ? {backgroundColor: theme.color11?.val} : {backgroundColor: theme.color4?.val}
                            ]}
                        />
                    ))}
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    creditCard: {
        width: '90%',
        height: height * 0.2,
        borderRadius: 20,
        padding: 30,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    creditAndVisaView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    creditText: {
        color: '#FFFFFF',
        fontSize: 16,
        letterSpacing: 2,
        fontFamily: 'Ubuntu-Regular',
        includeFontPadding: false
    },
    cardDetailsView: {
        flexDirection: 'column'
    },
    cardDetailsText: {
        color: "#FFFFFF",
        fontFamily: "IBMPlexMono-Regular",
        fontSize: 16,
        letterSpacing: 2,
        paddingTop: '2.5%',
        includeFontPadding: false
    },
    progressBar: {
        height: 5,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 5,
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
});
