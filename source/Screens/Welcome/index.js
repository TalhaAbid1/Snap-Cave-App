import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Animated, { BounceInDown, BounceInUp, FadeInUp, RollInLeft, RollInRight } from 'react-native-reanimated';
import { Styles } from './Styles';
import { Images } from '../../Assets/Images/ImageExporter';

const Welcome = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Animated.Image
        entering={BounceInUp.duration(500).springify()}
        source={Images.welcomeImage}
        style={Styles.welcomeImageStyle} />
      {/* LINER GRADIENT */}
      <Animated.View entering={BounceInDown.delay(400).duration(500).springify()}>
        <LinearGradient
          colors={['rgba(255, 233, 241,0)', 'rgba(255, 233, 241,0.8)', '#ffe9f1',]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
          style={Styles.linearGradient}>
          <View style={Styles.AppView}>
            <Animated.Text entering={RollInLeft.delay(500).duration(500).springify()} style={Styles.AppName}>SNAP CAVE</Animated.Text>
            <Animated.Text entering={RollInLeft.delay(500).duration(500).springify()} style={Styles.TagLine}>Every Snap Tells a Story</Animated.Text>
            <Animated.View entering={RollInRight.delay(500).duration(500).springify()}>
              <TouchableOpacity onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{
                    name: 'HomeStack',
                    state: {
                      index: 0,
                      routes: [{ name: 'Home' }],
                    },
                  }],
                });
              }} style={Styles.ButtonView}>
                <Image source={Images.AppIcon} style={Styles.AppIconStyle} />
                <Text style={Styles.ButtonText}>Explore More</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </LinearGradient>
      </Animated.View>
    </View >
  )
}

export default Welcome
