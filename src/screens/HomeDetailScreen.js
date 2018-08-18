import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, Text} from 'react-native';
import MyButton from "../components/MyButton";

class HomeDetailScreen extends Component {
  render() {
    // const name = this.props.navigation.getParam('name', 'default value');
    // const cb = this.props.navigation.getParam('cb', () => {});
    const row = this.props.navigation.getParam('row', {});
    return (
      <View style={styles.container}>
        <Text>{row.notice}</Text>
        <Text>{row.date}</Text>
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