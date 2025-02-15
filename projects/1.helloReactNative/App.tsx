// App.tsx
import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import MyFirstComponent from './components/MyFirstCompinent';
import SecondCompoentWithProps from './components/SecondCompoentWithProps';
import JSComponent1 from './jsComponents/JSComponent1'
import JsComponent2 from './jsComponents/JsComponent2'
import ClassBasedComponentWithLifeCycle from './jsComponents/ClassBasedComponentWithLifeCycle'
import FunctionalComponentWithLifeCycle from './jsComponents/FunctionalComponentWithLifeCycle'
import TypsScriptClassBasedCOmponentWithLifeCycle from './components/TypsScriptClassBasedCOmponentWithLifeCycle';
import TypeScriptFunctionalComponentWithLifeCycle from './components/TypeScriptFunctionalComponentWithLifeCycle';

const App: React.FC = () => {
  
    const showAlert = () => {
        Alert.alert('Button was clicked!');
    };

     const onJsButtonClick = () => {
        Alert.alert('JS Component Button was clicked!');
    };

    return (
        <View style={styles.container}>
            <Text style = {styles.text}>TYPESCRIPT Functional Component</Text>
            <MyFirstComponent />
            <SecondCompoentWithProps title='Hello' onButtonClick={showAlert} />

            <Text style = {styles.text}>TYPESCRIPT Functional Component Life Cycle</Text>
            <TypeScriptFunctionalComponentWithLifeCycle />
           <Text style = {styles.text}>TYPESCRIPT Class Component Life Cycle</Text>
           <TypsScriptClassBasedCOmponentWithLifeCycle />

            <Text style = {styles.text}>Javascript Functional Component</Text>
            <JSComponent1 />
            <Text style = {styles.text}>Javascript Functional Component With Props</Text>
            <JsComponent2 name = "Hello Second Component" button = "Click me" onClick = {onJsButtonClick}/>
            <Text style = {styles.text}>Javascript Clased based Component Lifecycle</Text>
            <ClassBasedComponentWithLifeCycle /> 
            <Text style = {styles.text}>Javascript Functional Component Lifecycle</Text>
            <FunctionalComponentWithLifeCycle />
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
     text: {
         width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default App;
