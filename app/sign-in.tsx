import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '@/constants/icons';
import images from '@/constants/images';

const sign_in = () => {
  const handle_login = () => {
    console.log('handle_login');
  }

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: 'white' }}>
      <ScrollView contentContainerClassName="h-full" style={{ backgroundColor: 'white' }}>
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" style={{ backgroundColor: 'white' }} />

        <View className="px-10" style={{ backgroundColor: 'white' }}>
          <Text className="text-center uppercase" style={{ backgroundColor: 'white', fontFamily: 'Vampire Wars' }}>Welcome to fuse.</Text>

          <Text className="text-center mt-5">Hero line</Text>

          <TouchableOpacity onPress={handle_login} className="mt-5 py-4 shadow-md rounded w-full" style={{ backgroundColor: 'white' }}>
            <View className="flex flex-row items-center justify-center" >
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default sign_in