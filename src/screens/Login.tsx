import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
    return (
        <View>
            <h1>Login: </h1>
            <Input
                placeholder="Username"
                leftIcon={
                    <Icon
                        name='user'
                        size={20}
                        color='black'
                    />
                }
                style={styles}
                onChangeText={value => { }}
            />
            <Input
                placeholder="Password"
                leftIcon={
                    <Icon
                        name='key'
                        size={20}
                        color='black'
                    />
                }
                style={styles}
                onChangeText={value => { }}
            />
            <Button
                title="Login"
            />
        </View>
    )
}

const styles = StyleSheet.create({

});
