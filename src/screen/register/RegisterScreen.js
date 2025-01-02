import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from '../../styles/StyleSheet';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const RegisterScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const validTextInput = () => {
    if (first_Name.trim().length < 2) {
      Alert.alert('Name should have at least 2 characters');
      return false;
    }
    if (last_Name.trim().length < 2) {
      Alert.alert('Name should have at least 2 characters');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      Alert.alert('Invalid email format');
      return false;
    }
    const passwordPattern = /^[A-Z][a-z]*@[0-9]+$/;
    if (!passwordPattern.test(password.trim())) {
      Alert.alert('Password Min 8 chars, 1 digit, 1 upper, 1 lower, 1 special');
      return false;
    }
    return true;
  };

  const loginNavigation = () => {
    navigation.navigate('Login');
  };
  return (
    <View
      style={[styles.viewOuterContainer, {paddingVertical: verticalScale(50)}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Text style={[styles.txtSignUp, {}]}>
          Create Your Free Freelancer Account
        </Text> */}

        <View>
          <Text style={styles.txtFirst}>First Name</Text>
          <View style={styles.inputPassword}>
            <FontAwesome5
              name="user-alt"
              color={'black'}
              size={scale(15)}
              style={{
                marginVertical: verticalScale(13),
                paddingRight: scale(10),
              }}
            />
            <TextInput
              placeholder="Enter First Name"
              style={{
                width: '94.8%',
                color: 'black',
                fontSize: moderateScale(16),
              }}
              value={first_Name}
              placeholderTextColor="grey"
              onChangeText={setFirst_Name}
            />
          </View>
        </View>

        <View>
          <Text style={styles.txtFirst}>Last Name</Text>
          <View style={styles.inputPassword}>
            <FontAwesome5
              name="user-alt"
              color={'black'}
              size={scale(15)}
              style={{
                marginVertical: verticalScale(13),
                paddingRight: scale(10),
              }}
            />
            <TextInput
              placeholder="Enter Last Name"
              style={{
                width: '94.8%',
                color: 'black',
                fontSize: moderateScale(16),
              }}
              placeholderTextColor="grey"
              value={last_Name}
              onChangeText={setLast_Name}
            />
          </View>
        </View>

        <View>
          <Text style={styles.txtFirst}>Email</Text>
          <View style={styles.inputPassword}>
            <MaterialCommunityIcons
              name="email"
              color={'black'}
              size={scale(20)}
              style={{
                marginVertical: verticalScale(12),
                paddingRight: scale(10),
              }}
            />
            <TextInput
              placeholder="Enter Email"
              style={{
                width: '93%',
                fontSize: moderateScale(16),
                color: 'black',
              }}
              value={email}
              placeholderTextColor="grey"
              onChangeText={text => setEmail(text.toLowerCase())}
              keyboardType="email-address"
            />
          </View>
        </View>

        <Text style={styles.txtFirst}>Password</Text>
        <View style={styles.inputPassword}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Entypo
              name={isPasswordVisible ? 'lock-open' : 'lock'}
              color={'black'}
              size={scale(20)}
              style={{
                marginVertical: verticalScale(10),
                paddingRight: scale(10),
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              width: '80%',
              color: 'black',
              fontSize: moderateScale(16),
              marginRight: scale(8),
            }}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            placeholderTextColor="grey"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              color={'blue'}
              size={scale(20)}
              style={{
                marginVertical: verticalScale(11),
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={loginNavigation}
          style={[
            styles.inputPassword,
            {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'blue',
            },
          ]}>
          <Text style={[styles.txtApplySign, {color: 'white'}]}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
