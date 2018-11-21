import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class MyComponent extends Component {


  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home2'
        },
      }
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Home2
          </Text>
        </View>
    );
  }
}

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});