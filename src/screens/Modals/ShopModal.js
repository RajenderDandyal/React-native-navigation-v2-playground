import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from "react-native";
import {Navigation} from "react-native-navigation";

class MyComponent extends Component {
  state={
    rnsc:""
  }
  handleSubmit = (stack, screen) => {
    console.log(stack)
    Navigation.dismissModal(this.props.componentId);

   // these methods don't work with modal
    // Navigation.pop(this.props.componentId);
    /*Navigation.mergeOptions(stack, {
      bottomTabs: {
        currentTabIndex: screen
      }
    });*/
  }
  render() {
    console.log(this.props)
    return (
        <View style={styles.container}>
          <Text>
            modal
          </Text>
          <Text>
            {this.props.modalData}
          </Text>
          <Button title={'Submit'} onPress={()=>this.handleSubmit('BottomTabId',1)}/>
        </View>
    );
  }
}

export default MyComponent;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});