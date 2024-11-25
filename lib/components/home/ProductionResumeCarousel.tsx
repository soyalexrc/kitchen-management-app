import { useState } from 'react';
import {Text, useTheme, View, XStack} from 'tamagui';
import Carousel from 'react-native-reanimated-carousel/src/Carousel';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import {useUser} from "@clerk/clerk-expo";

const { width, height } = Dimensions.get('window');

const cards = [
    {
        type: 'Credit',
        source: 'visa',
        lastFour: '5168',
        bg: "#0f153b",
        creditLine: 70000,
        balance: 50000,
        preferred_currency_symbol: 'S/',
        preferred_currency_code: 'PEN'
    },
    {
        type: 'Credit',
        source: 'mastercard',
        lastFour: '4289',
        bg: "#000000",
        creditLine: 22600,
        balance: 22000,
        preferred_currency_symbol: 'S/',
        preferred_currency_code: 'PEN'
    },
    {
        type: 'Debit',
        source: 'visa',
        lastFour: '4878',
        bg: "#17A2A2",
        creditLine: 16000,
        balance: 12000,
        preferred_currency_symbol: 'S/',
        preferred_currency_code: 'PEN'
    },
    {
        type: 'Credit',
        source: 'amex',
        lastFour: '4878',
        bg: "#bdbec2",
        creditLine: 90000,
        balance: 48000,
        preferred_currency_symbol: 'S/',
        preferred_currency_code: 'PEN'
    },
    {
        type: 'Credit',
        source: 'discover',
        lastFour: '4878',
        bg: "#3f9328",
        creditLine: 5000,
        balance: 3500,
        preferred_currency_symbol: 'S/',
        preferred_currency_code: 'PEN'
    }
]

export function ProductionResumeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const {user} = useUser();

    return (
        <View>
            <Carousel
                loop={false}
                width={width}
                height={(width / 2)}
                data={cards}
                scrollAnimationDuration={500}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ item }) => {
                    return (
                        <Pressable>
                            <View style={[styles.creditCard, { backgroundColor: item.bg }]}>
                                <View style={styles.cardDetailsView}>
                                    <Text style={styles.cardDetailsText}>**** **** **** {item.lastFour}</Text>
                                    <View style={styles.progressBar}>
                                        <View
                                            style={[styles.progress, { width: `${(item.balance / item.creditLine) * 100}%` }]} />
                                    </View>
                                    <XStack justifyContent="space-between">
                                        <Text
                                            style={styles.cardDetailsText}>{item.preferred_currency_symbol} {item.balance}</Text>
                                        <Text
                                            style={styles.cardDetailsText}>{item.preferred_currency_symbol} {item.creditLine}</Text>
                                    </XStack>
                                </View>
                            </View>
                        </Pressable>
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
                                currentIndex === index ? { backgroundColor: theme.color11?.val } : { backgroundColor: theme.color4?.val }
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
        height: 3,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 5,
    },
    progress: {
        height: '100%',
        backgroundColor: '#5EAA4BFF',
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
