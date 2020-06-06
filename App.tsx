import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { isLogin } from "./src/util/auth";

// SCREEN
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createStackNavigator();

function App() {

    const [isSignedIn, setIsSignedIn] = React.useState(false);

    React.useEffect(() => {
        isLogin().then(res=>{
            setIsSignedIn(true)
        }).catch(e=>{
            console.log(e)
        })
    });

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
