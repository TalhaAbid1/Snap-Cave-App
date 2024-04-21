import { Image, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import AutoTypingText from 'react-native-auto-typing-text';
import Animated, { BounceInUp } from 'react-native-reanimated';
import { Images } from '../../Assets/Images/ImageExporter';
import { Styles } from './styles';

const Splash = ({ navigation }) => {
    const navigator = () => {
        setTimeout(() => {
            navigation.replace('HomeStack')
        }, 2000);
    }
    return (
        <View style={Styles.container}>
            <AutoTypingText
                text={`WELCOME TO SNAP CAVE`}
                charMovingTime={100}
                delay={1}
                style={Styles.autoTypingText}
                onComplete={navigator}
            />
            <LottieView source={Images.splashImage} autoPlay loop={false} style={Styles.LottieView} />
            <Animated.View entering={BounceInUp.delay(300).duration(1000).springify()} style={Styles.BottomView}>
                <Text style={Styles.BottomTextHead}>SAVE || SHARE || SEARCH</Text>
                <Image source={Images.AppIcon} style={Styles.BottomAppIcon} />
                <Text style={Styles.BottomText}>Much More</Text>
            </Animated.View>
        </View>
    )
}

export default Splash