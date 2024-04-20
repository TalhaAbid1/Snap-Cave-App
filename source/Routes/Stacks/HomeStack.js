import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../Screens/Home';

const HomeRoutes = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <HomeRoutes.Navigator screenOptions={{ headerShown: false }}>
            <HomeRoutes.Screen name='Home' component={Home} />
        </HomeRoutes.Navigator>
    )
}
export default HomeStack;
