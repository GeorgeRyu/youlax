import React from 'react';

// Components
import { 
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity, 
  View, 
  Text 
} from 'react-native';
import { styles } from './style';

// Assets
const menuImage = require('../../assets/icons/btn_menu.png');
const timerImage = require('../../assets/icons/btn_timer.png');

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';


class PlayerHeader extends React.Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity
          style={styles.btn_left_menu_touchable}
          onPress={()=>this._pressMenu()}>
          <Image source={menuImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
        <Text
          style={styles.lb_title}
          numberOfLines={2}>Title of the Sound</Text>
        <TouchableOpacity
          style={styles.btn_right_menu_touchable}
          onPress={()=>this._pressTimer()}>
          <Image source={timerImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
      </View>
    );
  }

  // Menu
  _pressMenu() {
    console.log('pressed menu');
    this.props.updateMenuState(!this.props.menuState);
  }

  // Timer
  _pressTimer() { 
    console.log('pressed timer');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHeader);