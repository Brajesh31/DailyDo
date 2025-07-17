import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function TaskScreen() {
  const { task } = useLocalSearchParams(); // 'task' comes from [task].tsx

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Task ID: {task}</Text>
    </View>
  );
}
