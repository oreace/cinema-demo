import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../../common/Movie';
// import Social from 'react-native-vector-icons/FontAwesome';
// import { ListItem } from 'react-native-elements';
// import TextStyles from '../../../helpers/TextStyles';
// import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';
// import Colors from '../../../helpers/Colors';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class NowShowing extends Component {

  static navigationOptions = {
    header: null,
  };
  componentDidMount() {}
  // link = () => this.props.navigation.navigate('Stalk');

  render() {
    const { navigate } = this.props.navigation;
    const { user } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Movie onPress={()=>navigate('ShowMovie')}/>
          <Movie />
          <Movie />
          <Movie />
        </View>
      </ScrollView>
    );
  }
}

NowShowing.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

NowShowing.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(NowShowing));
