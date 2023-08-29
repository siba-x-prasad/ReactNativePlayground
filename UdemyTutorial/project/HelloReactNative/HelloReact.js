import React,{useState} from "react";
import {View, Button, Text, StyleSheet} from 'react-native';

export default Hello = () =>{
    const[outputText, setOutputText] = useState('Hello Sibaprasad');
    return(
        <View style={styles.container}>
            <Text>
                {outputText}
            </Text>
            <Button title="Change Text" onPress={ ()=> setOutputText('Welcome to React Native') }></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});