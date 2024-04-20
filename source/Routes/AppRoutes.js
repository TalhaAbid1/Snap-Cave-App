import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/Splash';
import HomeStack from './Stacks/HomeStack';

const AppMainRoutes = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <AppMainRoutes.Navigator screenOptions={{ headerShown: false }}>
                <AppMainRoutes.Screen name='Splash' component={Splash} />
                <AppMainRoutes.Screen name='HomeStack' component={HomeStack} />
            </AppMainRoutes.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;