import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import styles from '../../styles/StyleSheet';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Register', {animationEnabled: false});
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>WellCome</Text>
    </View>
  );
};

export default SplashScreen;
