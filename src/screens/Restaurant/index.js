import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  images,
  GOOGLE_API_KEY,
} from '@constants';
import styles from './styles';

import {BASE_URL} from '@env'

const Restaurant = () => {
  return (
    <View>
      <Text style={{...FONTS.h3}}>Restaurant</Text>

      <View style={styles.text}>
        <Text>Check Color</Text>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.list}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />

        <Image
          source={images.burger_restaurant_1}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Restaurant;
