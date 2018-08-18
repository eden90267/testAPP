import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

ProfileScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


export default ProfileScreen;