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
        marginTop: '25%',
        color: Colors.appColorDark,
        alignSelf: 'center',
        fontFamily: Fonts.CustomFontsBold
    },
    BottomView: {
        position: 'absolute',
        bottom: '2%',
        alignSelf: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    BottomTextHead: {
        fontSize: 23,
        color: Colors.appColorDead,
        fontFamily: Fonts.CustomFontsBold,
    },
    BottomAppIcon: {
        height: 80,
        width: 80,
    },
    BottomText: {
        color: Colors.appColorDead,
        fontSize: 18,
        fontFamily: Fonts.CustomFontsBold
    },

})