import {Sheet, Text} from "tamagui";
import {useState} from "react";

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export function MenuSheet({open, setOpen}: Props) {
    const [position, setPosition] = useState(0);

    return (
        <Sheet
            forceRemoveScrollEnabled={open}
            modal={false}
            open={open}
            dismissOnOverlayPress
            onOpenChange={setOpen}
            position={position}
            onPositionChange={setPosition}
            snapPoints={[50]}
            snapPointsMode="percent"
            dismissOnSnapToBottom
            zIndex={100_000}
        >

            <Sheet.Overlay
                enterStyle={{opacity: 0}}
                exitStyle={{opacity: 0}}
            />

            <Sheet.Handle />

            <Sheet.Frame>
                <Text>Sheet menu</Text>
            </Sheet.Frame>
        </Sheet>
    )
}
