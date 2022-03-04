import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import global from './styles/styles'

export default Card = (props) => {
  return (
    <View style={[styles.card, global.rounded, global.m2, global.p2, props.cardStyles]}>
            {props.title ? <Text style={[props.textColor, styles.title, global.p2]}>{props.title}</Text> : null}
            {props.body}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#C4C4C4'
  },
  card: {
    shadowRadius: 16,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'gray'
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});