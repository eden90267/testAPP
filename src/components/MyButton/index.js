import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

import style from './style';

class MyButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[style.button, {backgroundColor: this.props.backgroundColor, borderRadius: this.props.borderRadius}]}
        onPress={this.props.onPress}>
        <Text style={{color: this.props.color}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propsType = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};
MyButton.defaultProps = {
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: 10
};

export default MyButton;