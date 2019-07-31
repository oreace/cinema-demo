import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { TabView, TabBar, SceneMap, PagerScroll } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUser from '../../../selectors/UserSelectors';
import NowShowing from '../NowShowing';
import ComingSoon from '../ComingSoon';
import TextStyles from '../../../helpers/TextStyles';
// import Colors from '../../../helpers/Colors';
import styles from './styles';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {}
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Now Showing' },
      { key: 'second', title: 'Coming Soon' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => <TabBar {...props}
                              indicatorStyle={styles.indicator}
                              style={styles.tab}
                              tabStyle={styles.tabOne}
                              renderLabel={({ route, focused, color }) => (
                                <View style={ focused ? styles.active : styles.inactive }>
                                  <Text style={ [TextStyles.smallText, focused ? styles.textActive : styles.textInactive] }>
                                    {route.title}
                                  </Text>
                                </View>
                              )}
                              />;

  _renderScene = SceneMap({
    first: NowShowing,
    second: ComingSoon,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        renderPager={props => <PagerScroll {...props} />}
        //activeColor="red"
      />
    );
  }

  // render() {
  //   return (

      // {/* <ScrollView style={styles.container}>
      //   <Text onPress={()=>this.props.navigation.openDrawer()} style={{fontSize: 20, fontFamily: 'Ubuntu-Regular'}}>Home and Some Random Tux</Text>
      // </ScrollView> */}
  //   );
  // }
}

Home.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

Home.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
