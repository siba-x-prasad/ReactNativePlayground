import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, Text, Button } from 'react-native';
import store from './src/store';
import Counter from './src/Counter';
import CounterView from './src/CounterView'

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <CounterView />
                <Counter />
            </SafeAreaView>
        </Provider>
    );
};

export default App;
