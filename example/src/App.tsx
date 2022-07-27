import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as screens from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#fff'
          }
        }}
      >

        <Stack.Screen
          name="Home"
          component={screens.Home}
        />
        <Stack.Screen
          name="Box"
          component={screens.Box}
        />
        <Stack.Screen
          name="Button"
          component={screens.Button}
        />
        <Stack.Screen
          name="Flag"
          component={screens.Flag}
        />
        <Stack.Screen
          name="CheckBox"
          component={screens.CheckBox}
        />
        <Stack.Screen
          name="Option"
          component={screens.Option}
        />
        <Stack.Screen
          name="OptionsGroup"
          component={screens.OptionsGroup}
        />
        <Stack.Screen
          name="Link"
          component={screens.Link}
        />
        <Stack.Screen
          name="Message"
          component={screens.Message}
        />
        <Stack.Screen
          name="Hint"
          component={screens.Hint}
        />
        <Stack.Screen
          name="Counter"
          component={screens.Counter}
        />
        <Stack.Screen
          name="Avatar"
          component={screens.Avatar}
        />
        <Stack.Screen
          name="ItemSelector"
          component={screens.ItemSelector}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;