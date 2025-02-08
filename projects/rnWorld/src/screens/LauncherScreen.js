import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './splash/SplashScreen';
import DashboardScreen from './play/DashboardScreen';
import OnBoardingScreen from './account/OnBoardingScreen';
import SigninScreen from './account/SigninScreen';
import SignupScreen from './account/SignupScreen';

const Stack = createNativeStackNavigator();

class LauncherApp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'tomato'},
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="splash"
            component={SplashScreen}
          />
          <Stack.Screen
            name="dashboard"
            component={DashboardScreen}
            options={{
              title: 'Dashboard',
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="onboarding"
            component={OnBoardingScreen}
            options={{
              title: 'OnBoarding',
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="signin"
            component={SigninScreen}
            options={{
              title: 'SignIn',
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignupScreen}
            options={{
              title: 'Signup',
              headerBackVisible: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default LauncherApp;
