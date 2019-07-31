import { StyleSheet } from 'react-native';
import Colors from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  tabOne: {
    width: 'auto',
  },
  textInactive: {
    color: Colors.darkGrey,
    fontSize: 12,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 5,
    marginRight: 5,
    textTransform: 'uppercase',
  },
  textActive: {
    color: 'white',
    fontSize: 12,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 5,
    marginRight: 5,
    textTransform: 'uppercase',
  },
  active: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  inactive: {
  },
 });

export default styles;
