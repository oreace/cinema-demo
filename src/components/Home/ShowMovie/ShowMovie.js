import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  // StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';
import Social from 'react-native-vector-icons/FontAwesome';
// import { ListItem } from 'react-native-elements';
import TextStyles from '../../../helpers/TextStyles';
// import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';
// import Colors from '../../../helpers/Colors';
import styles from './styles';

class ShowMovie extends Component {
  static navigationOptions = {
    header: null,
  };
//   componentDidMount() {
//     StatusBar.setHidden(true);
//  }
  // componentDidMount() {}
  // link = () => this.props.navigation.navigate('Stalk');

  render() {
    return (
      <View style={styles.body}>
      <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/movies/JW.jpg')}
          style={styles.img}
        />
        <TouchableOpacity style={[styles.half, styles.next]}>
          <Social name="play" size={30} color="white"/>
          {/* <Image source={require('../../../assets/play3.png')}/> */}
          </TouchableOpacity>
          <View style={[styles.half,styles.lowest]}>
          </View>
          <View style={[styles.half, styles.middle]}>
          </View> 
          <TouchableOpacity style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>
            <Image source={require('../../../assets/arrow-left2.png')}/>
          </TouchableOpacity>
        <View style={styles.info}>
            <View style={styles.ratings}>
                <Text style={TextStyles.bigTitle}>John Wick 3: Parabellum</Text>
                <View style={styles.tags}>
                    <Text style={[TextStyles.bigText, styles.tag]}>Action</Text>
                    <Text style={[TextStyles.bigText, styles.tag]}>Adventure</Text>
                    <Text style={[TextStyles.bigText, styles.tag]}>Triller</Text>
                </View>
                <View style={styles.rate}>
                    <Text><Text style={TextStyles.bigRating}>8</Text><Text style={TextStyles.smallRating}>/10</Text></Text>
                    <Rating
                    isDisabled="true"
                    defaultRating="3.5"
                    count="5"
                    readonly
                    imageSize={12}
                    style={styles.star}
                    />
                </View>
            </View>
        </View>
    </View>
        <View style={styles.talkBox}>
            <Text style={[TextStyles.bigText, styles.talk]}>After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.</Text>
        </View>
        </ScrollView>
        <TouchableOpacity style={styles.bookBox}>
          {/* <Social name="book" size={30} color="white"/>          */}
          <Text style={[TextStyles.BigRating, styles.book]}>Book Now</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

ShowMovie.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

ShowMovie.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);
