import React from 'react';
import { Text, View, Button } from 'react-native';

const Landing = ({ navigation }) => {
    // navigation gives access to the nav container
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 50 }}>
            <Button title='Register' color="grey" onPress={() => navigation.navigate('Register')}/>
            <Text> </Text>
            <Button title='Login' color="grey" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}
export default Landing;
