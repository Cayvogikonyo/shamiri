import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import global from './styles/styles'

export default Card = (props) => {
  return (
    <View style={[global.card, global.rounded, global.m2, global.p2, props.cardStyles]}>
            {props.title ? <Text style={[props.textColor, styles.title]}>{props.title}</Text> : null}
            {props.body}
    </View>
  );
}

// Card.propTypes = {
//   onPress: React.PropTypes.func.isRequired,
//   label: React.PropTypes.string,
//   cardStyles: React.PropTypes.any,
//   textColor: React.PropTypes.any,
// };

const styles = StyleSheet.create({
  title: {
    color: '#C4C4C4'
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});