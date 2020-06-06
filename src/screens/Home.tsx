import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { logout } from "../util/auth";

function Home({navigation}: any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />

            <Button
                title="Logout"
                onPress={() => {
                   logout();
                }}
            />
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    home: {}
});
