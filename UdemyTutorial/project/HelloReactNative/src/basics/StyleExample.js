import React from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

export default StyleExample = () => {
    return(
        <View style={{padding:100}}>
            <View>
                <TextInput placeHolder="Course Goal" style = {{borderColor:'black', borderWidth:1, padding:10 }}/>
                <Button title="add"/>
            </View>
        </View>    
    );
}