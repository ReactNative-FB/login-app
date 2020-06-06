import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREEN
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

// UTIL
import getToken from './src/util/getToken';

const Stack = createStackNavigator();

function App() {

    let isSignedIn = getToken()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Details" component={Details} options={{title: 'Overview'}}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
