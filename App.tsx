import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/routers/Main';
import Tabuada from './src/routers/Tabuada';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {

  const Navigation = createStackNavigator();


  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Navigation.Navigator screenOptions={{headerMode:false}}>
          <Navigation.Screen name='Início' component={Main} />
          <Navigation.Screen name='Tabuada' component={Tabuada}/>
        </Navigation.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

