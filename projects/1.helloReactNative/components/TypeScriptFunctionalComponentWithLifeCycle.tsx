import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TypeScriptFunctionalComponentWithLifeCycle: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const TAG = "TypeSCript Fnctional Component"

  // ComponentDidMount and ComponentWillUnmount
  useEffect(() => {
    console.log(`${TAG}: Component did mount`);
    
    // Cleanup function to mimic componentWillUnmount
    return () => {
      console.log(`${TAG}: Component will unmount`);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  // ComponentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log(`${TAG}: Component did update: count is now ${count}`);
    }
  }, [count]); // This effect runs when 'count' changes

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default TypeScriptFunctionalComponentWithLifeCycle;
