/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyButton from "./src/components/MyButton";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeMainScreen from "./src/screens/HomeMainScreen";
import HomeDetailScreen from "./src/screens/HomeDetailScreen";

const HomeStack = createStackNavigator({
  HomeMain: {
    screen: HomeMainScreen,
    navigationOptions: () => ({
      title: '這是上方 title',
      headerBackTitle: null // '返回'
    })
  },
  HomeDetail: {
    screen: HomeDetailScreen
  }
}, {

});

const ProfileStack = createStackNavigator({
  ProfileMain: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: '這是上方 title',
      headerBackTitle: null // '返回'
    })
  },
  // HomeDetail: {
  //   screen: HomeDetailScreen
  // }
}, {

});

const App = createBottomTabNavigator(
  // 頁面路徑, 依照順序顯示
  {
    Home: {screen: HomeStack},
    Profile: {screen: ProfileStack}
  },
  // 客製化參數 (格式就是這樣，照官方)
  // {
  //   navigationOptions: ({navigation}) => ({
  //     tabBarIcon: ({tintColor}) => {
  //     }
  //   }),
  //   tabBarOption: {
  //   }
  // }
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        let iconName = '';
        if (navigation.state.routeName === 'Home') {
          // return <Image
          //   // source={{uri: ''}}
          //   source={require('...')}
          //   style={{}}
          // />;
          iconName = "ios-trophy";
        } else if (navigation.state.routeName === 'Profile') {
          iconName = "ios-options";
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>;
      }
    }),
    tabBarOption: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    // initialRouteName: 'Profile'
  }
);

// export default class App extends Component {
//
//   state = {
//     name: 'eden',
//     validCode: '',
//     isValid: false,
//   };
//
//   // changeName = () => {
//   //   // this.setState({name: 'Eden Liu'});
//   //
//   //   this.state.name === 'eden' ? this.setState({name: '歡迎回來'}) : this.setState({name: '你好'})
//   // };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* lesson 1 */}
//         <Text style={styles.instructions}>Welcome, {this.state.name}!</Text>
//         <Button title="Click"
//                 onPress={() => this.setState({name: 'Eden'})}/>
//         <TouchableOpacity onPress={this.changeName}>
//           <Text>Click2</Text>
//         </TouchableOpacity>
//         <TextInput style={styles.input}
//                    onChangeText={(text) => this.setState({validCode: text})} autoFocus />
//         <MyButton
//                   backgroundColor="#000"
//                   color="#fff"
//                   borderRadius={10}
//                   title="Enter"
//                   onPress={() => this.state.validCode ===  '1234' ? this.setState({isValid: true}) : this.setState({isValid: false})}/>
//         <Text>您輸入的是：{this.state.validCode}</Text>
//         {this.state.isValid ? <Text style={{color: 'green'}}>輸入成功</Text> : <Text style={{color: 'red'}}>輸入失敗</Text>}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   instructions: {
//     fontSize: 20,
//     marginBottom: 20
//   },
//   input: {
//     borderColor: '#eee',
//     borderWidth: 2,
//     height: 50,
//     width: 300,
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });

export default App;