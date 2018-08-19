import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

import * as StorageHelper from '../helpers/StorageHelper';
import {connect} from "react-redux";
import {addToCounter} from "../redux/action";



class ProfileScreen extends Component {

  state = {
    name: '',
    myBookCount:0,
    myBookList: []
  };

  componentDidMount = async () => {
    await this.loadStorage();
    this.props.navigation.addListener('didFocus', async () => this.loadStorage());
  };

  loadStorage = async () => {
    try {
      const name = await StorageHelper.getMySetting('name');
      if (name !== null) {
        this.setState({name});
      }

      let likeBooks = await StorageHelper.getMySetting('likeBooks');
      console.log(likeBooks);
      likeBooks = JSON.parse(likeBooks);
      this.setState({
        myBookCount: likeBooks.length,
        myBookList: likeBooks
      });
    } catch (e) {
      console.log(e);
    }
  };

  toSave = async () => {
    try {
      await StorageHelper.setMySetting('name', this.state.name);
    } catch (e) {
      console.log(error);
    }

    // 之後再繼續做其他動作，ex：把名字傳到後端
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>state name: {this.state.name}</Text>
        <Text>store newName: {this.props.newName}</Text>
        <TextInput
          style={{width: 300, height: 50, backgroundColor: 'yellow', textAlign: 'center', fontSize: 20, marginBottom: 8}}
          onChangeText={(text) => this.setState({name: text})}
        />
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <TouchableHighlight style={{borderWidth: 2, borderColor: '#f55', padding: 8, marginRight: 8}} onPress={this.toSave}>
            <Text>設定名字 (AsyncStorage)</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{borderWidth: 2, borderColor: '#f55', padding: 8}} onPress={() => {this.props.addToCounter(this.state.name)}}>
            <Text>設定名字 (Redux)</Text>
          </TouchableHighlight>
        </View>
        <Text>我總共收藏 {this.state.myBookCount} 本書</Text>
        {this.state.myBookList.map(book => {
          return (
            <Text key={book.id}>書名為：{book.volumeInfo.title}</Text>
          );
        })}
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

const mapStateToProps = (state) => {
  return {
    newName: state.newName
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
    addToCounter: (name) => dispatch(addToCounter(name))
  }
};


export default connect(mapStateToProps, mapdispatchToProps)(ProfileScreen);