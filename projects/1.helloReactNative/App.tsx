// App.tsx
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MyFirstComponent from './components/MyFirstCompinent';
import SecondCompoentWithProps from './components/SecondCompoentWithProps';

const App: React.FC = () => {
  
    const showAlert = () => {
        Alert.alert('Button was clicked!');
    };

    return (
        <View style={styles.container}>
            <MyFirstComponent />
            <SecondCompoentWithProps title='Hello' onButtonClick={showAlert} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});

export default App;
