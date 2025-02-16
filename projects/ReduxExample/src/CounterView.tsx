import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';
import { RootState } from './store';

const CounterView: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.borderContainer}>
           <Text style={styles.text}>Counter View</Text>
            <Text style={{ fontSize: 32 }}>{count}</Text>
            <View style={styles.space} /> 
            <Button title="Increment by 10" onPress={() => dispatch(incrementByAmount(10))} />
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    fontSize: 32,
    textAlign: 'center',
    borderRadius: 10,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10
  },
  borderContainer: {
     width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
  },
  space: {
    marginTop: 20
  },
});

export default CounterView;
