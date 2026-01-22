import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '@/constants/images';

const sign_in = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handle_login = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3010/handle-login', {
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
      <ScrollView contentContainerClassName="h-full" style={{ backgroundColor: 'white' }}>
        <Image source={images.onboarding} className="w-full h-3/6" resizeMode="contain" style={{ backgroundColor: 'white' }} />

        <View className="px-10" style={{ backgroundColor: 'white' }}>
          <Text className="text-center uppercase" style={{ backgroundColor: 'white', fontFamily: 'Vampire Wars' }}>Welcome to fuse.</Text>

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
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={handle_login} className="mt-5 py-4 shadow-md rounded w-full" style={{ backgroundColor: 'white' }}>
            <View className="flex flex-row items-center justify-center" >
              {/* <Image source={icons.google} className="w-5 h-5" resizeMode="contain" /> */}
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default sign_in