import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  smallTitle: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 15,
  },
  smallText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
  },
  bigTitle: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
  },
  bigText:{
    fontFamily: 'Ubuntu-Regular',
    fontSize: 13,
  },
  bigRating:{
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    color: 'red',
  },
  smallRating:{
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
  },
  error: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    color: Colors.red,
  },
});

export default styles;
