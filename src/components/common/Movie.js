import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import TextStyles from '../../helpers/TextStyles';
import Colors from '../../helpers/Colors';
import Icons from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    height: 450,
    width: 300,
    marginBottom: 100,
    position: 'relative',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  info:{
    position: 'absolute',
    height: 100,
    width: 200,
    backgroundColor: 'white',
    bottom: -70,
    left: 50,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    // shadowRadius: 2,
    elevation: 5,
    },
    ratings: {
        padding: 10,
    },
    tags: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // display: 'flex',
    },
    tag: {
        padding: 3,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: Colors.primary,
        color:'white',
        borderRadius: 20,
        fontSize: 10,
    },
    rate:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
    },
    star:{
        marginLeft: 5,
        marginTop: 2,
    },
    half:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 225,
        borderWidth: 0.5,
    },
    next: {
        width: 50,
        height: 50,
        right: -25,
        borderRadius: 50 / 2,
        translateY: 50 / 2,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        zIndex: 3,
      },
      middle:{
        width: 70,
        height: 70,
        right: -35,
        borderRadius: 70 / 2,
        translateY: 70 / 2,
        backgroundColor: 'rgba(19, 183, 255, 0.7)',
        borderColor: 'rgba(19, 183, 255, 0.7)',
        zIndex: 2,
      },
      lowest:{
        width: 90,
        height: 90,
        right: -45,
        borderRadius: 90 / 2,
        translateY: 90 / 2,
        backgroundColor: 'rgba(19, 183, 255, 0.5)',
        borderColor: 'rgba(19, 183, 255, 0.5)',
        zIndex: 1,
        },
});

const Movie = props => (
  <View style={styles.container}>
      <Image
        source={require('../../assets/movies/JW.jpg')}
        style={styles.img}
      />
      <TouchableOpacity {...props} style={[styles.half, styles.next]}>
        <Image source={require('../../assets/arrow-right2.png')}/>
          {/* <Icons name="arrow-right" size={30} color="white" /> */}
        </TouchableOpacity>
        <View style={[styles.half,styles.lowest]}>
        </View>
        <View style={[styles.half, styles.middle]}>
        </View>
        <View style={styles.info}>
            <View style={styles.ratings}>
                <Text style={TextStyles.smallTitle}>John Wick 3: Parabellum</Text>
                <View style={styles.tags}>
                    <Text style={[TextStyles.smallText, styles.tag]}>Action</Text>
                    <Text style={[TextStyles.smallText, styles.tag]}>Adventure</Text>
                    <Text style={[TextStyles.smallText, styles.tag]}>Triller</Text>
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
);

Movie.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
};

Movie.defaultProps = {
  style: null,
  title: '',
};

export default Movie;
