import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, Text, Image} from 'react-native';
import MyButton from "../components/MyButton";

class HomeDetailScreen extends Component {
  render() {
    // const name = this.props.navigation.getParam('name', 'default value');
    // const cb = this.props.navigation.getParam('cb', () => {});
    const row = this.props.navigation.getParam('row', {volumeInfo:{imageLinks:{}}});
    return (
      <View style={styles.container}>
        <Image source={{uri: row.volumeInfo.imageLinks.smallThumbnail}}
               style={{width: 50, height: 60, marginRight: 10}}/>
        <Text style={{fontSize: 15}}>{row.volumeInfo.title}</Text>
        {/*<MyButton title="Click" onPress={() => {*/}
          {/*cb(name);*/}
          {/*this.props.navigation.navigate('HomeMain');*/}
        {/*}}/>*/}
      </View>
    );
  }
}

HomeDetailScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default HomeDetailScreen;