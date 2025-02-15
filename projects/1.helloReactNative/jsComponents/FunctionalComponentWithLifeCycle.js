import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const FunctionalComponentWithLifeCycle = () => {
  const [count, setCount] = useState(0);

  // componentDidMount & componentWillUnmount
  useEffect(() => {
    console.log("componentDidMount: The component has mounted.");

    // This is analogous to componentWillUnmount
    return () => {
      console.log(
        "componentWillUnmount: The component is about to be removed."
      );
    };
  }, []); // Empty dependency array means this runs only once (on mount & unmount)

  // componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate: The component has updated.");

    // Optionally, add any logic here that should react to state changes
    if (count > 0) {
      console.log(`Count has changed to ${count}`);
    }
  }, [count]); // Array of dependencies; this effect runs when 'count' changes

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default FunctionalComponentWithLifeCycle;
