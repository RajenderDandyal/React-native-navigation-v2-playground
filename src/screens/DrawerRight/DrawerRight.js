import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class DrawerRight extends Component {
  render() {
    console.log(this.props);
    return (
        <View style={styles.container}>
          <Text> Drawer Right </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop: 25
  }
});
