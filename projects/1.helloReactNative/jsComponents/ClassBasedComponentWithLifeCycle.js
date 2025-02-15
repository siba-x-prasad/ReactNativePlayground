import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class ClassBasedComponentWithLifeCycle extends React.Component {
  TAG = "JS Class COmponent"
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log(`${this.TAG}: Constructor: Component is initializing`);
  }

  // Called right after the component is mounted
  componentDidMount() {
    console.log(`${this.TAG}: componentDidMount: Component has mounted`);
    // You can perform side effects (like fetching data) here
  }

  // Called whenever the component receives new props
  componentDidUpdate(prevProps, prevState) {
    console.log(`${this.TAG}: componentDidUpdate: Component has updated`);
    // You can access prevProps and prevState here
    if (this.state.count !== prevState.count) {
      console.log(
        `Count has changed from ${prevState.count} to ${this.state.count}`
      );
    }
  }

  // Called right before the component is removed from the DOM
  componentWillUnmount() {
    console.log(`${this.TAG}: componentWillUnmount: Component is about to be removed`);
    // You can clean up resources, timers, subscriptions, etc.
  }

  // This lifecycle method is a great place for optimization
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `${this.TAG}: shouldComponentUpdate: Deciding if the component should update`
    );

    // Return true to allow the update, false to prevent
    return nextState.count !== this.state.count;
  }

  // Custom method to increment count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log(`${this.TAG}: Render: Rendering the component`);
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
      </View>
    );
  }
}

export default ClassBasedComponentWithLifeCycle;
