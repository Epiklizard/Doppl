import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '@/constants/images';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const sign_in = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const formTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const keyboardShowListener = Keyboard.addListener(keyboardShowEvent, (event) => {
      const keyboardHeight = event.endCoordinates.height;
      Animated.spring(formTranslateY, {
        toValue: -keyboardHeight,
        useNativeDriver: true,
        friction: 8,
        tension: 65,
      }).start();
    });

    const keyboardHideListener = Keyboard.addListener(keyboardHideEvent, () => {
      Animated.spring(formTranslateY, {
        toValue: 0,
        useNativeDriver: true,
        friction: 8,
        tension: 65,
      }).start();
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, [formTranslateY]);

  const handle_login = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.29:3010/handle-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Success', 'Logged in successfully!');
      } else {
        Alert.alert('Error', data.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  }

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        {/* Background image - stays fixed */}
        <Image
          source={images.onboarding}
          className="w-full"
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: SCREEN_HEIGHT * 0.5,
            backgroundColor: 'white'
          }}
        />

        {/* Animated form content - slides up over image */}
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
            transform: [{ translateY: formTranslateY }]
          }}
        >
          <View className="px-10" style={{ backgroundColor: 'rgba(255,255,255,0.98)', paddingTop: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <Text className="text-center uppercase" style={{ fontFamily: 'Vampire Wars' }}>Welcome to fuse.</Text>

            <Text className="text-center mt-5">Hero line</Text>

            <View className="mt-5">
              <Text className="text-lg font-rubik-medium text-black-300">Username</Text>
              <TextInput
                className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2"
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View className="mt-5">
              <Text className="text-lg font-rubik-medium text-black-300">Password</Text>
              <TextInput
                className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
              // secureTextEntry
              />
            </View>

            <TouchableOpacity onPress={handle_login} className="mt-5 py-4 shadow-md rounded w-full" style={{ backgroundColor: 'white' }}>
              <View className="flex flex-row items-center justify-center" >
                {/* <Image source={icons.google} className="w-5 h-5" resizeMode="contain" /> */}
                <Text className="text-lg font-rubik-medium text-black-300 ml-2">Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default sign_in
