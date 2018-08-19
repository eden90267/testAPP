import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, Text, Button, ListView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';

import * as StorageHelper from '../helpers/StorageHelper';

// TODO: need real datas, just for test now
// const FAKE_DATA = [
//   {
//     notice: '恭喜您！達成環島100次',
//     date: '2018/08/01 14:00',
//   },
//   {
//     notice: '您的會員身份認證，已審核通過！',
//     date: '2018/08/02 12:00',
//   },
//   {
//     notice: '撥款通知：本公司已將款項$123456撥入您的指定銀行帳戶．',
//     date: '2018/08/05 12:30',
//   },
//   {
//     notice: '恭喜您！短短1小時內，完成慢跑10公里',
//     date: '2018/08/10 14:00',
//   },
//   {
//     notice: '請款作業通知：提醒您，請至「請款作業」進行請款作業，以利撥款作業．',
//     date: '2018/08/12 14:00',
//   },
//   {
//     notice: '恭喜您！泳渡日月潭成功！',
//     date: '2018/08/13 14:00',
//   },
//   {
//     notice: '提醒您，橫跨太平洋的泳渡日期將在三天後開始！請提早做好防曬禦寒準備！',
//     date: '2018/08/13 17:00',
//   },
//   {
//     notice: '溫馨小叮嚀，運動過後也不要忘了要收操喔！',
//     date: '2018/08/14 11:00',
//   },
//   {
//     notice: '恭喜您！來領取健身房貼身教練優惠券1小時免費體驗！',
//     date: '2018/08/16 18:00',
//   },
//   {
//     notice: '你真的太棒了！目前完成三鐵運動項目！期待下次三鐵世界盃見！',
//     date: '2018/08/17 15:00',
//   }
// ]

class HomeMainScreen extends Component {

  state = {
    name: '',
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
    ds: []
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({dataSource: this.state.dataSource.cloneWithRows(FAKE_DATA)});
    // }, 1000);
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction')
      .then(res => res.json())
      .then(data => {
        const dataSource = this.state.dataSource.cloneWithRows(data.items);
        this.setState({
          dataSource,
          ds: data.items
        });
      })
      .catch(e => {
        console.log(e);
      })
  }

  componentDidUpdate = async () => {
    let getAll = [];

    this.state.ds.forEach(item => {
      if (item.addToMyLists) {
        getAll.push(item);
      }
    });

    // 儲存
    await this.saveToStorage(getAll);
  };

  saveToStorage = async (getAll) => {
    try {
      console.log(getAll);
      await StorageHelper.setMySetting('likeBooks', JSON.stringify(getAll))
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/*<Text>HomeMain {this.state.name}</Text>*/}
        {/*<Button title="click" onPress={() => this.props.navigation.navigate('HomeDetail', {name: 'Eden', cb: (name) => this.setState({name})})}/>*/}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={row => this.renderBook(row)}
          style={{backgroundColor: 'white'}}
        />
      </View>
    );
  }

  clickToDetail = (row) => {
    this.props.navigation.navigate('HomeDetail', {row});
  };

  pressRow = (row) => {
    const newDS = this.state.ds.map(item => {
      let tempItem = {...item};
      if (row.id === tempItem.id) {
        tempItem.addToMyLists = !tempItem.addToMyLists
      }
      return tempItem;
    });
    this.setState({dataSource: this.state.dataSource.cloneWithRows(newDS), ds: newDS});
  };

  renderBook = (row) => {
    return (
      <TouchableHighlight onPress={() => this.clickToDetail(row)}>
        <View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 80,
            padding: 8
          }}>
            <TouchableOpacity onPress={() => {
              this.pressRow(row)
            }}>
              <Image
                source={row.addToMyLists ? require('../images/square_check.jpg') : require('../images/square_non_check.jpg')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
            </TouchableOpacity>
            <Image source={{uri: row.volumeInfo.imageLinks.smallThumbnail}}
                   style={{width: 50, height: 60, marginRight: 10}}/>
            <View style={{flex: 1, height: 64, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 15}}>{row.volumeInfo.title}</Text>
              <Text style={{fontSize: 13, alignSelf: 'flex-end'}}>{row.volumeInfo.publishedDate}</Text>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: '#ddd'}}/>
        </View>
      </TouchableHighlight>
    );
  }
}

HomeMainScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },

});

export default HomeMainScreen;