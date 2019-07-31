import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Social from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import TextStyles from '../../../helpers/TextStyles';
// import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';
import Colors from '../../../helpers/Colors';
import styles from './styles';

const List = [
  {
    title: 'Rihanna',
    time: '3 h',
    action: 'ComingSoon',
    subtitle: 'lorem ipsum dolor sit amet, connnestuer adiptsind elit, lorem ipsum dolor sit amet, connnestuer adiptsind elit',
    handle: '@badgirlriri',
    type: 'instagram',
    avatar: '../../../assets/icons/avatar.jpg',
  },
  {
    title: 'Dele Alli',
    time: '4 h',
    action: 'ComingSoon',
    subtitle: 'lorem ipsum dolor sit amet, connnestuer adiptsind elit, lorem ipsum dolor sit amet, connnestuer adiptsind elit',
    handle: '@delealli',
    type: 'twitter',
    avatar: '../../../assets/icons/avatar.jpg',
  },
  {
    title: 'Rafal Nadal',
    time: '5 h',
    action: 'ComingSoon',
    subtitle: 'lorem ipsum dolor sit amet, connnestuer adiptsind elit, lorem ipsum dolor sit amet, connnestuer adiptsind elit',
    handle: '@nadal',
    type: 'instagram',
    avatar: '../../../assets/icons/avatar.jpg',
  },
];

class ComingSoon extends Component {
  static navigationOptions = {
    header: null,
  };
  // componentDidMount() {}
  // link = () => this.props.navigation.navigate('Stalk');

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.lists}>
          {
            List.map((item, i) => (
              <ListItem
                key={i}
                title={<Text style={TextStyles.title}>{item.title} <Text style={styles.textField}>{item.action}   </Text><Text style={TextStyles.small}>{item.time}</Text></Text>}
                subtitle={<View><Text style={TextStyles.handle}>{item.handle}</Text><Text style={TextStyles.textField}>{item.subtitle}</Text></View>}
                leftAvatar={{
                  source: item.avatar && { uri: item.avatar },
                  title: item.title,
                }}
                bottomDivider
                rightElement={
                  <Social name={item.type} size={20} color={Colors.primary} style={styles.icons} />
                  }
               // onPress={() => this.link()}
              />
          ))
          }
        </View>
      </ScrollView>
    );
  }
}

ComingSoon.propTypes = {
  user: PropTypes.object,
  // navigation: PropTypes.object.isRequired,
};

ComingSoon.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
