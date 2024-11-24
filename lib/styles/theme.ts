type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(203, 64%, 48%, 1)',
  'hsla(240, 58%, 25%, 0)',
  'hsla(240, 58%, 25%, 0.25)',
  'hsla(240, 58%, 25%, 0.5)',
  'hsla(240, 58%, 25%, 0.75)',
  'hsla(240, 58%, 25%, 1)',
  'hsla(240, 58%, 28%, 1)',
  'hsla(240, 58%, 31%, 1)',
  'hsla(240, 58%, 33%, 1)',
  'hsla(240, 58%, 36%, 1)',
  'hsla(240, 58%, 39%, 1)',
  'hsla(240, 58%, 42%, 1)',
  'hsla(240, 58%, 44%, 1)',
  'hsla(240, 58%, 47%, 1)',
  'hsla(240, 58%, 50%, 1)',
  'hsla(0, 15%, 15%, 1)',
  'hsla(0, 15%, 10%, 1)',
  'hsla(0, 14%, 10%, 0)',
  'hsla(0, 14%, 10%, 0.25)',
  'hsla(0, 14%, 10%, 0.5)',
  'hsla(0, 14%, 10%, 0.75)',
  'hsla(203, 64%, 57%, 1)',
  'hsla(240, 57%, 12%, 0)',
  'hsla(240, 57%, 12%, 0.25)',
  'hsla(240, 57%, 12%, 0.5)',
  'hsla(240, 57%, 12%, 0.75)',
  'hsla(240, 58%, 12%, 1)',
  'hsla(240, 58%, 16%, 1)',
  'hsla(240, 58%, 20%, 1)',
  'hsla(240, 58%, 29%, 1)',
  'hsla(240, 58%, 37%, 1)',
  'hsla(240, 58%, 46%, 1)',
  'hsla(0, 15%, 93%, 1)',
  'hsla(0, 15%, 95%, 1)',
  'hsla(0, 15%, 95%, 0)',
  'hsla(0, 15%, 95%, 0.25)',
  'hsla(0, 15%, 95%, 0.5)',
  'hsla(0, 15%, 95%, 0.75)',
  'hsla(203, 64%, 40%, 0)',
  'hsla(203, 64%, 40%, 0.25)',
  'hsla(203, 64%, 40%, 0.5)',
  'hsla(203, 64%, 40%, 0.75)',
  'hsla(203, 64%, 40%, 1)',
  'hsla(203, 64%, 43%, 1)',
  'hsla(203, 64%, 46%, 1)',
  'hsla(203, 64%, 51%, 1)',
  'hsla(203, 64%, 54%, 1)',
  'hsla(203, 64%, 59%, 1)',
  'hsla(203, 64%, 62%, 1)',
  'hsla(203, 64%, 65%, 1)',
  'hsla(250, 50%, 95%, 1)',
  'hsla(249, 52%, 95%, 0)',
  'hsla(249, 52%, 95%, 0.25)',
  'hsla(249, 52%, 95%, 0.5)',
  'hsla(249, 52%, 95%, 0.75)',
  'hsla(203, 64%, 35%, 0)',
  'hsla(203, 64%, 35%, 0.25)',
  'hsla(203, 64%, 35%, 0.5)',
  'hsla(203, 64%, 35%, 0.75)',
  'hsla(203, 64%, 35%, 1)',
  'hsla(203, 64%, 38%, 1)',
  'hsla(203, 64%, 41%, 1)',
  'hsla(203, 64%, 49%, 1)',
  'hsla(203, 64%, 52%, 1)',
  'hsla(203, 64%, 60%, 1)',
  'hsla(250, 50%, 90%, 1)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
'accentBackground',
'accentColor',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor']


const n1 = t([[0, 0],[1, 0],[2, 1],[3, 2],[4, 3],[5, 4],[6, 5],[7, 6],[8, 7],[9, 8],[10, 9],[11, 10],[12, 11],[13, 12],[14, 13],[15, 14],[16, 15],[17, 16],[18, 17],[19, 18],[20, 19],[21, 20],[22, 5],[23, 4],[24, 6],[25, 6],[26, 8],[27, 7],[28, 9],[29, 8],[30, 16],[31, 15],[32, 16],[33, 15],[34, 17],[35, 13],[36, 18]])

export const light = n1
const n2 = t([[0, 21],[1, 21],[2, 22],[3, 23],[4, 24],[5, 25],[6, 26],[7, 27],[8, 28],[9, 5],[10, 29],[11, 8],[12, 30],[13, 11],[14, 31],[15, 14],[16, 32],[17, 33],[18, 34],[19, 35],[20, 36],[21, 37],[22, 26],[23, 27],[24, 25],[25, 25],[26, 5],[27, 29],[28, 28],[29, 5],[30, 33],[31, 32],[32, 33],[33, 32],[34, 34],[35, 31],[36, 35]])

export const dark = n2
const n3 = t([[0, 8],[1, 8],[2, 38],[3, 39],[4, 40],[5, 41],[6, 42],[7, 43],[8, 44],[9, 0],[10, 45],[11, 46],[12, 21],[13, 47],[14, 48],[15, 49],[16, 50],[17, 50],[18, 51],[19, 52],[20, 53],[21, 54],[22, 42],[23, 41],[24, 43],[25, 43],[26, 0],[27, 44],[28, 45],[29, 0],[30, 50],[31, 50],[32, 50],[33, 50],[34, 51],[35, 48],[36, 52]])

export const light_accent = n3
const n4 = t([[0, 31],[1, 31],[2, 55],[3, 56],[4, 57],[5, 58],[6, 59],[7, 60],[8, 61],[9, 43],[10, 44],[11, 62],[12, 63],[13, 46],[14, 21],[15, 64],[16, 65],[17, 50],[18, 51],[19, 52],[20, 53],[21, 54],[22, 59],[23, 60],[24, 58],[25, 58],[26, 43],[27, 44],[28, 61],[29, 43],[30, 50],[31, 65],[32, 50],[33, 65],[34, 51],[35, 21],[36, 52]])

export const dark_accent = n4
const n5 = t([[30, 15],[31, 14],[32, 15],[33, 14]])

export const light_alt1 = n5
const n6 = t([[30, 14],[31, 13],[32, 14],[33, 13]])

export const light_alt2 = n6
const n7 = t([[22, 8],[23, 7],[24, 9],[25, 9],[26, 11],[27, 10],[29, 11],[28, 12]])

export const light_active = n7
export const light_surface3 = n7
export const light_Button = n7
export const light_SliderTrackActive = n7
const n8 = t([[22, 6],[23, 5],[24, 7],[25, 7],[26, 9],[27, 8],[29, 9],[28, 10]])

export const light_surface1 = n8
export const light_ListItem = n8
export const light_SelectTrigger = n8
export const light_Card = n8
export const light_Progress = n8
export const light_TooltipArrow = n8
export const light_SliderTrack = n8
export const light_Input = n8
export const light_TextArea = n8
const n9 = t([[22, 7],[23, 6],[24, 8],[25, 8],[26, 10],[27, 9],[29, 10],[28, 11]])

export const light_surface2 = n9
export const light_Checkbox = n9
export const light_Switch = n9
export const light_TooltipContent = n9
export const light_RadioGroupItem = n9
const n10 = t([[22, 10],[23, 10],[24, 11],[25, 11],[26, 10],[27, 10],[29, 11],[28, 11]])

export const light_surface4 = n10
const n11 = t([[30, 32],[31, 14],[32, 32],[33, 14]])

export const dark_alt1 = n11
const n12 = t([[30, 14],[31, 31],[32, 14],[33, 31]])

export const dark_alt2 = n12
const n13 = t([[22, 5],[23, 29],[24, 28],[25, 28],[26, 30],[27, 11],[29, 30],[28, 8]])

export const dark_active = n13
export const dark_surface3 = n13
export const dark_Button = n13
export const dark_SliderTrackActive = n13
const n14 = t([[22, 27],[23, 28],[24, 26],[25, 26],[26, 29],[27, 8],[29, 29],[28, 5]])

export const dark_surface1 = n14
export const dark_ListItem = n14
export const dark_SelectTrigger = n14
export const dark_Card = n14
export const dark_Progress = n14
export const dark_TooltipArrow = n14
export const dark_SliderTrack = n14
export const dark_Input = n14
export const dark_TextArea = n14
const n15 = t([[22, 28],[23, 5],[24, 27],[25, 27],[26, 8],[27, 30],[29, 8],[28, 29]])

export const dark_surface2 = n15
export const dark_Checkbox = n15
export const dark_Switch = n15
export const dark_TooltipContent = n15
export const dark_RadioGroupItem = n15
const n16 = t([[22, 8],[23, 8],[24, 29],[25, 29],[26, 8],[27, 8],[29, 29],[28, 29]])

export const dark_surface4 = n16
const n17 = t([[30, 50],[31, 49],[32, 50],[33, 49]])

export const light_accent_alt1 = n17
const n18 = t([[30, 49],[31, 48],[32, 49],[33, 48]])

export const light_accent_alt2 = n18
const n19 = t([[22, 0],[23, 44],[24, 45],[25, 45],[26, 21],[27, 46],[29, 21],[28, 47]])

export const light_accent_active = n19
export const light_accent_surface3 = n19
export const light_accent_Button = n19
export const light_accent_SliderTrackActive = n19
const n20 = t([[22, 43],[23, 42],[24, 44],[25, 44],[26, 45],[27, 0],[29, 45],[28, 46]])

export const light_accent_surface1 = n20
export const light_accent_ListItem = n20
export const light_accent_SelectTrigger = n20
export const light_accent_Card = n20
export const light_accent_Progress = n20
export const light_accent_TooltipArrow = n20
export const light_accent_SliderTrack = n20
export const light_accent_Input = n20
export const light_accent_TextArea = n20
const n21 = t([[22, 44],[23, 43],[24, 0],[25, 0],[26, 46],[27, 45],[29, 46],[28, 21]])

export const light_accent_surface2 = n21
export const light_accent_Checkbox = n21
export const light_accent_Switch = n21
export const light_accent_TooltipContent = n21
export const light_accent_RadioGroupItem = n21
const n22 = t([[22, 46],[23, 46],[24, 21],[25, 21],[26, 46],[27, 46],[29, 21],[28, 21]])

export const light_accent_surface4 = n22
const n23 = t([[30, 65],[31, 64],[32, 65],[33, 64]])

export const dark_accent_alt1 = n23
const n24 = t([[30, 64],[31, 21],[32, 64],[33, 21]])

export const dark_accent_alt2 = n24
const n25 = t([[22, 43],[23, 44],[24, 61],[25, 61],[26, 63],[27, 46],[29, 63],[28, 62]])

export const dark_accent_active = n25
export const dark_accent_surface3 = n25
export const dark_accent_Button = n25
export const dark_accent_SliderTrackActive = n25
const n26 = t([[22, 60],[23, 61],[24, 59],[25, 59],[26, 44],[27, 62],[29, 44],[28, 43]])

export const dark_accent_surface1 = n26
export const dark_accent_ListItem = n26
export const dark_accent_SelectTrigger = n26
export const dark_accent_Card = n26
export const dark_accent_Progress = n26
export const dark_accent_TooltipArrow = n26
export const dark_accent_SliderTrack = n26
export const dark_accent_Input = n26
export const dark_accent_TextArea = n26
const n27 = t([[22, 61],[23, 43],[24, 60],[25, 60],[26, 62],[27, 63],[29, 62],[28, 44]])

export const dark_accent_surface2 = n27
export const dark_accent_Checkbox = n27
export const dark_accent_Switch = n27
export const dark_accent_TooltipContent = n27
export const dark_accent_RadioGroupItem = n27
const n28 = t([[22, 62],[23, 62],[24, 44],[25, 44],[26, 62],[27, 62],[29, 44],[28, 44]])

export const dark_accent_surface4 = n28
const n29 = t([[30, 6],[31, 5],[32, 7],[33, 7],[22, 16],[23, 15],[24, 16],[25, 15],[26, 14],[27, 13],[29, 12],[28, 11]])

export const light_SwitchThumb = n29
export const light_SliderThumb = n29
export const light_Tooltip = n29
export const light_ProgressIndicator = n29
const n30 = t([[22, 66]])

export const light_SheetOverlay = n30
export const light_DialogOverlay = n30
export const light_ModalOverlay = n30
export const light_accent_SheetOverlay = n30
export const light_accent_DialogOverlay = n30
export const light_accent_ModalOverlay = n30
const n31 = t([[30, 27],[31, 28],[32, 26],[33, 26],[22, 33],[23, 32],[24, 33],[25, 32],[26, 14],[27, 31],[29, 11],[28, 30]])

export const dark_SwitchThumb = n31
export const dark_SliderThumb = n31
export const dark_Tooltip = n31
export const dark_ProgressIndicator = n31
const n32 = t([[22, 67]])

export const dark_SheetOverlay = n32
export const dark_DialogOverlay = n32
export const dark_ModalOverlay = n32
export const dark_accent_SheetOverlay = n32
export const dark_accent_DialogOverlay = n32
export const dark_accent_ModalOverlay = n32
const n33 = t([[30, 43],[31, 42],[32, 44],[33, 44],[22, 50],[23, 50],[24, 50],[25, 50],[26, 49],[27, 48],[29, 47],[28, 21]])

export const light_accent_SwitchThumb = n33
export const light_accent_SliderThumb = n33
export const light_accent_Tooltip = n33
export const light_accent_ProgressIndicator = n33
const n34 = t([[30, 60],[31, 61],[32, 59],[33, 59],[22, 50],[23, 65],[24, 50],[25, 65],[26, 64],[27, 21],[29, 46],[28, 63]])

export const dark_accent_SwitchThumb = n34
export const dark_accent_SliderThumb = n34
export const dark_accent_Tooltip = n34
export const dark_accent_ProgressIndicator = n34