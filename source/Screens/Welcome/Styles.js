import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { hp, wp } from '../../Utils/Responsive';
import { Fonts } from '../../Assets/Fonts/FontExporter';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appColor
    },
    welcomeImageStyle: {
        height: '100%',
        width: '100%',
    },
    linearGradient: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: hp(40),
        width: wp(100),
        bottom: 0,
    },
    AppView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    AppName: {
        fontFamily: Fonts.CustomFontsBold,
        color: Colors.appColorDark,
        fontSize: 50,
    },
    TagLine: {
        fontFamily: Fonts.CustomFontsBold,
        color: Colors.appColorDead,
        fontSize: 25,
    },
    ButtonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.appColorDead,
        borderRadius: 25,
        marginTop: 50,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    ButtonText: {
        fontFamily: Fonts.CustomFontsBold,
        color: Colors.appColorDark,
        fontSize: 25,
        alignSelf: 'center',
        paddingRight: 15,
    },
    AppIconStyle: {
        height: hp(10),
        width: hp(10),
    },

})