import { Text, View } from 'react-native';

export default function Layout() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl text-blue-500 font-bold">
        Hello from Layout!
      </Text>
    </View>
  );
}
