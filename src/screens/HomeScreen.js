import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from "react-navigation";
import HomeMainScreen from "./HomeMainScreen";
import HomeDetailScreen from "./HomeDetailScreen";

/* 不會用到了 (給 App 了)
 **********************************************************/

const HomeScreen = createStackNavigator({
  HomeMain: {
    screen: HomeMainScreen,
    navigationOptions: () => ({
      title: '這是上方 title',
      headerBackTitle: '返回'
    })
  },
  HomeDetail: {
    screen: HomeDetailScreen
  }
}, {
  // 全域覆寫
  // navigationOptions: () => ({
  //   title: '這是上方 title',
  //   headerBackTitle: '返回'
  // })
});

// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Home</Text>
//       </View>
//     );
//   }
// }
//
// HomeScreen.propTypes = {};
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });


export default HomeScreen;