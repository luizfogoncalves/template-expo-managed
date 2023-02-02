import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/App';

const Stack = createNativeStackNavigator();
const AppNavigator: React.FC = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: '',
                headerTransparent: true
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                screenOptions={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
