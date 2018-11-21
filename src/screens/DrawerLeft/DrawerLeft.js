import React, {Component} from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {Navigation} from "react-native-navigation";

export default class DrawerLeft extends Component {

  handleLink = (stack, screen) => {
    // first option is stack .. this.props.componentId will not work here ...
    // specify the stack id where you want to navigate
    Navigation.mergeOptions(stack, {
      bottomTabs: {
        currentTabIndex: screen
      }
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.handleLink('BottomTabId', 0)}>
            <View style={styles.links}>
              <Text> Home </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleLink('BottomTabId', 1)}>
            <View style={styles.links}>
              <Text> Shop </Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 25,

  },
  links: {
    width: '100%',
    height: 35,
    backgroundColor: '#ccc',
    paddingLeft: 25,
    borderBottomWidth: 2,
    borderColor: 'blue',
    margin: 8,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
