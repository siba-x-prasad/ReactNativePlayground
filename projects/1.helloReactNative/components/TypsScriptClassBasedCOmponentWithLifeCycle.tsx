import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {}

interface State {
  count: number;
}

class TypsScriptClassBasedCOmponentWithLifeCycle extends Component<Props, State> {

  TAG = "TypeSCript Class Component"

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(`${this.TAG} : Constructor: Initializing state`);
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    console.log(`${this.TAG}: componentDidMount: Component has mounted`);
    // You can perform side effects like fetching data or subscriptions here
  }

  // Lifecycle method called before the component is removed from the DOM
  componentWillUnmount() {
    console.log(`${this.TAG}: componentWillUnmount: Component is about to be removed`);
    // Cleanup tasks like removing event listeners can be done here
  }

  // Lifecycle method called when the component's state or props are updated
  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log(`${this.TAG}: componentDidUpdate: Component has updated`);
    if (this.state.count !== prevState.count) {
      console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
    }
  }

  // Custom method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log(`${this.TAG} Render: Rendering component`);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
      </View>
    );
  }
}

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

export default TypsScriptClassBasedCOmponentWithLifeCycle;
