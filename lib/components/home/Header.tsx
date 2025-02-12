import { Image, Text, View, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function Header() {
    const { user } = useUser();
    const { signOut } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const isIos = Platform.OS === "ios";

    return (
        <View style={[styles.header, { marginTop: isIos ? 0 : 20 }]}>
            <View style={styles.userInfo}>
                <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>{user?.fullName}</Text>
                    {
                        user?.publicMetadata &&
                        <Text style={styles.userRole}>
                            {user.publicMetadata.role} {user.publicMetadata.station ? ` - ${user.publicMetadata.station}` : ""}
                        </Text>
                    }
                </View>
            </View>
            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>

            {menuOpen && (
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => signOut({ redirectUrl: "/" })}>
                        <Text>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    userRole: {
        fontSize: 14,
        color: "gray",
    },
    menu: {
        position: "absolute",
        right: 20,
        top: 60,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    menuItem: {
        padding: 10,
    },
});
