import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import global from './styles/styles'
  
  export default CalendarHelper = (props) => {
    return (
      <View style={[global.card, global.rounded, global.m2, global.p2, props.cardStyles]}>
              {props.title ? <Text style={[props.textColor, styles.title]}>{props.title}</Text> : null}
              {props.body}
      </View>
    );
  }

  
  const styles = StyleSheet.create({
    title: {
      color: '#C4C4C4'
    },
    text: {
      color: 'red',
      fontSize: 16,
    },
  });