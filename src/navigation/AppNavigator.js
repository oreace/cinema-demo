import React from 'react';
import {
  View,
  Text,
  // Image,
  ScrollView,
} from 'react-native';

import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems, SafeAreaView,
} from 'react-navigation';
import Home from '../components/Home/Home';
import NowShowing from '../components/Home/NowShowing';
import ComingSoon from '../components/Home/ComingSoon';

import Profile from '../components/Profile';

import Icons from 'react-native-vector-icons/FontAwesome';

// import Colors from '../helpers/Colors';

const iconForNav = ({ state }) => {
  switch (state.routeName) {
    case 'Home':
      return 'home';
    case 'Profile':
      return 'user';
    default:
      return null;
  }
};

const NavIcon = ({ icon, tintColor }) => (
  <Icons name={icon} size={22} color={tintColor}/>
);
const CustomNav = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
       <Text><Text>Header</Text></Text>
       <DrawerItems {...props} />
       <Text><Text>Footer</Text></Text>
     </SafeAreaView>
  </ScrollView>
)
const HomeStack = createStackNavigator({ Home, NowShowing, ComingSoon });
const ProfileStack = createStackNavigator({ Profile });
const AppStack = createDrawerNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },
  {
    drawerPosition: 'left',
    contentComponent : CustomNav,
    // contentOptions: {
    //   activeTintColor: Colors.primary,
    //   inactiveTintColor: Colors.gray,
      // itemsContainerStyle: {
      //   marginVertical: 0,
      // },
      // iconContainerStyle: {
      //   opacity: 1,
      // },
    // },
    drawerWidth: 200,
    defaultNavigationOptions: ({ navigation }) => ({
      drawerLabel: navigation.routeName,
      drawerIcon: ({ tintColor }) => (
      <NavIcon
          icon={iconForNav(navigation)}
          tintColor={tintColor}
      />
      ),
    }),
  }
)
export default AppStack;
