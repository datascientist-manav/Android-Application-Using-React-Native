/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import React from 'react';
import  {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Registration from './android/app/src/component/Regestration/Registration';
import UserDetails from './android/app/src/component/UserDetails/UserDetails.components';



const App= () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Regester">
        <Stack.Screen name = "Regester" component= {<Registration/>} />
        <Stack.Screen name = "UserDetails" component= {<UserDetails/>} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};



export default App;
