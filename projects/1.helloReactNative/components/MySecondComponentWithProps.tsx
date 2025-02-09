
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Button } from 'react-native';

interface MyFirstProp {
  title: string;
  onButtonClick: () => void;
}

const MySecondComponentWithProps: React.FC<MyFirstProp> = ({ title, onButtonClick }) => {
  return (
    <View>
      <Text>Welcome to second component</Text>
      <Button onPress={onButtonClick} title={title}/>
    </View>
  )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default MySecondComponentWithProps;