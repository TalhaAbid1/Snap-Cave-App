import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import AutoTypingText from 'react-native-auto-typing-text';
import { Images } from '../../Assets/Images/ImageExporter';
import { Styles } from './styles';

const Splash = ({ navigation }) => {
    const navigator = () => {
        setTimeout(() => {
            navigation.navigate('HomeStack')
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
            <LottieView source={Images.splashImage} autoPlay style={Styles.LottieView} />
        </View>
    )
}

export default Splash