import { StyleSheet } from "react-native";
import { Colors } from "../../Themes/Colors";
import { Fonts } from "../../Assets/Fonts/FontExporter";
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appColor,
    },
    LottieView: {
        height: '100%',
        width: '100%',
        opacity: 0.3,
    },
    autoTypingText: {
        position: 'absolute',
        fontSize: 30,
        marginTop:'25%',
        color: Colors.appColorDark,
        alignSelf: 'center',
        fontFamily: Fonts.CustomFontsBold
    },

})