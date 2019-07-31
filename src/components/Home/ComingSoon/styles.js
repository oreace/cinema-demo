import { StyleSheet } from 'react-native';
import Colors from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: Colors.white,
    paddingBottom: 10,
  },
  lists: {
    flex: 1,
    width: '100%',
  },
  push: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default styles;
