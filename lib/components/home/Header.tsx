import {Image, Text, useTheme, View, XStack, YStack} from "tamagui";
import {useAuth, useUser} from "@clerk/clerk-expo";
import {Platform, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {MenuSheet} from "@/lib/components/home/MenuSheet";
import {Fragment, useState} from "react";
import * as DropdownMenu from 'zeego/dropdown-menu'

export function Header() {
    const {user} = useUser();
    const {signOut} = useAuth();
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const isIos = Platform.OS === 'ios';
    return (
        <Fragment>
            <XStack alignItems="center" justifyContent="space-between" marginBottom={20} marginTop={isIos ? 0 : 20}>
                <XStack gap={20} alignItems="center">
                    <Image
                        source={{uri: user?.imageUrl}}
                        width={60}
                        height={60}
                        borderRadius={30}
                    />
                    <YStack gap={6}>
                        <Text>{user?.fullName}</Text>
                        <Text>{user?.publicMetadata?.role} - {user?.publicMetadata?.station}</Text>
                    </YStack>
                </XStack>
                <DropdownMenu.Root key="menu">
                    <DropdownMenu.Trigger>
                        <TouchableOpacity>
                            <Ionicons name="menu" size={24} style={{ color: theme.color12?.val }}/>
                        </TouchableOpacity>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Group key="0">
                            <DropdownMenu.Item key="profile">
                                <DropdownMenu.ItemTitle>Perfil</DropdownMenu.ItemTitle>
                            </DropdownMenu.Item>
                        </DropdownMenu.Group>
                        <DropdownMenu.Group key="1">
                            <DropdownMenu.Item key="logout" onSelect={() => signOut({ redirectUrl: '/' })}>
                                <DropdownMenu.ItemTitle >Cerrar sesion</DropdownMenu.ItemTitle>
                            </DropdownMenu.Item>
                        </DropdownMenu.Group>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </XStack>
            {/*<MenuSheet open={menuOpen} setOpen={setMenuOpen} />*/}
        </Fragment>
    )
}
