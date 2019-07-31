import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Card from '../common/Card';
import TextStyles from '../../helpers/TextStyles';
// import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
// import Comment from '../common/Comment';
import styles from './styles';

class Profile extends Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {}

  getMessage = () => {
    const { user } = this.props;
    // return `${strings.homeMessage} ${user && user.name}`;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Profile</Text>
      </ScrollView>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};

Profile.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
