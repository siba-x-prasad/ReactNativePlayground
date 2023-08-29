import React from 'react';
import {Text,Button, TextInput, View, StyleSheet} from 'react-native';

export default FlexBoxExample1 = () =>{
    return(
        <View style={{flex: 1, flexDirection: 'column-reverse', justifyContent:'space-between', alignItems:'center', padding:10}}>
            <TextInput 
                placeholder="Course Goal"
                style={{width:'50%', borderColor: 'black', borderWidth: 1, padding:10}}
                />
                <Button style={{width:'50%'}} title='Add Goal'/>
        </View>
    );
}