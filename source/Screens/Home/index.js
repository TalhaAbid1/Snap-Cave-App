import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Styles } from './Styles';

const Home = () => {
  return (
    <View style={Styles.container}>
      <FontAwesome5 name="youtube" size={100} color="#900" style={{ alignSelf: 'center' }} />
    </View>
  )
}

export default Home