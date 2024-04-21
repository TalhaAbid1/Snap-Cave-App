import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../../Screens/Welcome';
import Home from '../../Screens/Home';

const HomeRoutes = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <HomeRoutes.Navigator screenOptions={{ headerShown: false }}>
            <HomeRoutes.Screen name='Welcome' component={Welcome} />
            <HomeRoutes.Screen name='Home' component={Home} />
        </HomeRoutes.Navigator>
    )
}
export default HomeStack;
