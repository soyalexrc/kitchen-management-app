import * as themes from './theme'
import { tokens } from '@tamagui/config/v3'
import {createTamagui} from "tamagui";

export const config = createTamagui({
    tokens,
    themes
    // themes: {
    //     light: {
    //         background: '#ADD8E6', // Light navy blue background
    //         color: '#000000', // Black text color
    //         borderColor: '#CCCCCC', // Light border color
    //         shadowColor: '#999999', // Gray shadow color
    //         accentColor: '#FFA500', // Orange accent color
    //         // accentColor: '#000000',
    //         buttonBackground: '#ADD8E6', // Light navy blue button background
    //         buttonColor: '#000000', // Black button text color
    //         inputBackground: '#B0E0E6', // Lighter navy blue input background
    //         inputColor: '#000000', // Black input text color
    //         cardBackground: '#B0C4DE', // Slightly darker navy blue card background
    //         cardColor: '#000000', // Black card text color
    //         tooltipBackground: '#87CEEB', // Lighter navy blue tooltip background
    //         tooltipColor: '#000000', // Black tooltip text color
    //         sliderTrackColor: '#FFA500', // Orange slider track color
    //         sliderThumbColor: '#000000', // Black slider thumb color
    //         checkboxBackground: '#ADD8E6', // Light navy blue checkbox background
    //         checkboxColor: '#000000', // Black checkbox color
    //         switchBackground: '#ADD8E6', // Light navy blue switch background
    //         switchColor: '#000000', // Black switch color
    //         progressBackground: '#ADD8E6', // Light navy blue progress background
    //         progressColor: '#FFA500', // Orange progress color
    //         modalBackground: '#ADD8E6', // Light navy blue modal background
    //         modalColor: '#000000', // Black modal text color
    //         overlayBackground: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white overlay background
    //         // Add more theme properties as needed
    //         accentBackground: '#FFA500',
    //         background0: '#B0E0E6',
    //         background025: '#ADD8E6',
    //         background05: '#87CEEB',
    //         background075: '#4682B4',
    //         color1: '#ADD8E6',
    //         color2: '#87CEEB',
    //         color3: '#4682B4',
    //         color4: '#5F9EA0',
    //         color5: '#7B68EE',
    //         color6: '#6A5ACD',
    //         color7: '#483D8B',
    //         color8: '#4169E1',
    //         color9: '#0000FF',
    //         color10: '#000080',
    //         color11: '#808080',
    //         color12: '#000000',
    //         color0: '#FFFFFF',
    //         color025: '#CCCCCC',
    //         color05: '#999999',
    //         color075: '#666666',
    //         backgroundHover: '#87CEEB',
    //         backgroundPress: '#4682B4',
    //         backgroundFocus: '#B0E0E6',
    //         borderColorHover: '#999999',
    //         borderColorPress: '#666666',
    //         borderColorFocus: '#333333',
    //         colorHover: '#333333',
    //         colorPress: '#666666',
    //         colorFocus: '#999999',
    //         colorTransparent: 'rgba(0, 0, 0, 0.5)',
    //         placeholderColor: '#666666',
    //         outlineColor: '#FFA500',
    //     },
    //     dark: {
    //             background: '#000080', // Navy blue background
    //         color: '#FFFFFF', // White text color
    //         borderColor: '#333333', // Dark border color
    //         shadowColor: '#000000', // Black shadow color
    //         accentColor: '#FFA500', // Orange accent color
    //         // accentColor: '#FFFFFF',
    //         buttonBackground: '#000080', // Navy blue button background
    //         buttonColor: '#FFFFFF', // White button text color
    //         inputBackground: '#000033', // Darker navy blue input background
    //         inputColor: '#FFFFFF', // White input text color
    //         cardBackground: '#000066', // Slightly lighter navy blue card background
    //         cardColor: '#FFFFFF', // White card text color
    //         tooltipBackground: '#000099', // Lighter navy blue tooltip background
    //         tooltipColor: '#FFFFFF', // White tooltip text color
    //         sliderTrackColor: '#FFA500', // Orange slider track color
    //         sliderThumbColor: '#FFFFFF', // White slider thumb color
    //         checkboxBackground: '#000080', // Navy blue checkbox background
    //         checkboxColor: '#FFFFFF', // White checkbox color
    //         switchBackground: '#000080', // Navy blue switch background
    //         switchColor: '#FFFFFF', // White switch color
    //         progressBackground: '#000080', // Navy blue progress background
    //         progressColor: '#FFA500', // Orange progress color
    //         modalBackground: '#000080', // Navy blue modal background
    //         modalColor: '#FFFFFF', // White modal text color
    //         overlayBackground: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay background
    //         // Add more theme properties as needed
    //         accentBackground: '#FFA500',
    //         background0: '#000033',
    //         background025: '#000066',
    //         background05: '#000099',
    //         background075: '#0000CC',
    //         color1: '#000080',
    //         color2: '#000099',
    //         color3: '#0000CC',
    //         color4: '#0000FF',
    //         color5: '#3333FF',
    //         color6: '#6666FF',
    //         color7: '#9999FF',
    //         color8: '#CCCCFF',
    //         color9: '#E5E5FF',
    //         color10: '#F2F2FF',
    //         color11: '#808080',
    //         color12: '#000000',
    //         color0: '#FFFFFF',
    //         color025: '#333333',
    //         color05: '#666666',
    //         color075: '#999999',
    //         backgroundHover: '#000099',
    //         backgroundPress: '#000066',
    //         backgroundFocus: '#000033',
    //         borderColorHover: '#666666',
    //         borderColorPress: '#999999',
    //         borderColorFocus: '#CCCCCC',
    //         colorHover: '#CCCCCC',
    //         colorPress: '#999999',
    //         colorFocus: '#666666',
    //         colorTransparent: 'rgba(255, 255, 255, 0.5)',
    //         placeholderColor: '#999999',
    //         outlineColor: '#FFA500',
    //     }
    // },
    // ...the rest of your config
})

