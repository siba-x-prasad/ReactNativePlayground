import { Button, StyleSheet, Text, View } from "react-native";

const JsComponent2 = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Button onPress={props.onClick} title={props.button}></Button>
    </View>
  );
};

export default JsComponent2;
