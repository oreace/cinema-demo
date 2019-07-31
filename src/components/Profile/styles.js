import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
  },
  padding: {
    alignSelf: 'center',
    width: '90%',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
  },
  long: {
    flex: 3,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  start: {
    textAlign: 'left',
  },
  end: {
    textAlign: 'right',
    marginTop: 4,
    color: Colors.gray,
  },
  comments: {
    marginRight: 10,
  },
  slider: {
    height: 200,
    marginTop: 10,
  },
});

export default styles;
