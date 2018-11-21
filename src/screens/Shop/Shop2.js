import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class Shop2 extends Component {

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Shop2'
        },
      }
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Shop2
          </Text>
        </View>
    );
  }
}

export default Shop2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});