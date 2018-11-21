import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import {Navigation} from "react-native-navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }
  static options(passProps) {
    return {
      topBar: {
        rightButtons:[
          {
            id: 'filter',
            icon: require('../../assets/images/menu.png')
          },
          {
            id:'filter',
            icon:require('../../assets/images/menu.png')
          }
        ] ,

        leftButtons:{
          id: 'menu',
          icon: require('../../assets/images/menu.png')
        },
        title:{
          text:"Home",
        }
      }
    };
  }
  navigationButtonPressed({ buttonId }) {
    // will be called when "buttonOne" is clicked
    if (buttonId === 'menu'){
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }

      })
    }
    if (buttonId === 'filter'){
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          right: {
            visible: true
          }
        }

      })
    }
  }


  handlePress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Home2',
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Home2'
            }
          }
        }
      }
    });
  }
  handleStack = () => {

  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button title={'Home2'} onPress={this.handlePress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: "center",
    alignItems: "center"
  }
});
