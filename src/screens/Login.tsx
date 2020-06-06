import React, {useState} from 'react'
import { AsyncStorage } from "react-native";
import {
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from "../util/auth";

export default function Login({navigation}: any) {

    const [uname, setUsername] = useState('');
    const [upass, setPassword] = useState('');
    const _userLogin = () => {
        if (uname && upass) {
            // console.log(uname)
            // console.log(upass)

            fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: uname,
                    password: upass
                })
            }).then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    login(json.token)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    return (
        <ScrollView style={{padding: 20}}>
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
                onChangeText={uname => setUsername(uname)}
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
                onChangeText={upass => setPassword(upass)}
            />
            <Button
                onPress={() => _userLogin()}
                title="Login"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({});
