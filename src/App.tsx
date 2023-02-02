import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => {

    return (
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </TouchableWithoutFeedback>
        </SafeAreaProvider >
    );
};

export default App;
