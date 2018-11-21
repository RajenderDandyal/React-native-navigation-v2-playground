// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./src/screens/Home/Home";
import Shop from "./src/screens/Shop/Shop";
import DrawerLeft from './src/screens/DrawerLeft/DrawerLeft';
import DrawerRight from "./src/screens/DrawerRight/DrawerRight";
import Home2 from "./src/screens/Home/Home2";
import Shop2 from "./src/screens/Shop/Shop2";
import ShopModal from "./src/screens/Modals/ShopModal";

let loadIcons = Promise.all(
    [
      Icon.getImageSource('ios-home', 20, 'black'),
      Icon.getImageSource('md-menu', 30, 'black'),
      Icon.getImageSource('md-cart', 30, 'black'),
    ]
)

loadIcons.then(() => {

  Navigation.registerComponent(`Home`, () => Home);
  Navigation.registerComponent(`Home2`, () => Home2);
  Navigation.registerComponent(`Shop`, () => Shop);
  Navigation.registerComponent(`Shop2`, () => Shop2);
  Navigation.registerComponent(`DrawerLeft`, () => DrawerLeft);
  Navigation.registerComponent(`DrawerRight`, () => DrawerRight);
  Navigation.registerComponent(`ShopModal`, () => ShopModal);
})

Navigation.events().registerAppLaunchedListener(() => {
  loadIcons.then((sources) => {
    console.log(sources)

    Navigation.setDefaultOptions({
      topBar: {
        visible: true,
        animate: true,
        hideOnScroll: true,
        // leftButtons: [{ color: 'blue'}], back button disappears with this property.. provide color in component itself
        rightButtons: [{ color: 'red'}],
        backButton: {
          color: 'blue'
        },
        background: {
          color: 'pink'
        },
        title: {
          color: 'blue',
          fontSize: 18,
          alignment:'center'
        },

      },
      statusBar: {
        visible: true,
        style: 'light',
        backgroundColor: 'pink'
      },
      layout: {
        backgroundColor: '#eee',
        orientation: ['portrait', 'landscape'] // An array of supported orientations
      },
      bottomTabs: {
        visible: true,
        animate: true, // Controls whether BottomTabs visibility changes should be animated
        backgroundColor: 'pink'
      },
      bottomTab: {
        iconColor: 'red',
        selectedIconColor: 'blue',
        textColor: 'red',
        selectedTextColor: 'blue',
        fontFamily: 'Helvetica',
        fontSize: 10
      },
    });
    const bottomTabs = {
      id: 'BottomTabId',
      children: [
        {
          stack: {
            id: 'Home_Stack',
            children: [
              {
                component: {
                  id: 'home',
                  name: 'Home'
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'Home',
                icon: require('./src/assets/images/home.png'),
              }
            }
          }
        },
        {
          stack: {
            id: 'Shop_Stack',
            children: [
              {
                component: {
                  id: 'shop',
                  name: 'Shop'
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'Shop',
                icon: require('./src/assets/images/cart.png'),
              }
            }
          }
        }
      ],
    };
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'DrawerLeft',
              passProps: {
                text: 'This is a left side menu screen'
              }
            }
          },
          center: {
            bottomTabs: bottomTabs,
          },
          right: {
            component: {
              name: 'DrawerRight',
              passProps: {
                text: 'This is a right side menu screen'
              }
            }
          },

        }
      }
    });
  })

});