import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the tabs layout after 5 seconds
      router.replace('/(tabs)'); // replace to avoid going back to welcome
    }, 5000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the welcome page 🙂</Text>
    </View>
  );
};

export default Index;
