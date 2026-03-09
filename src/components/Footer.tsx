import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Footer() {
    const router = useRouter();

    const handleHomePress = () => {
        router.push('/');
    };

    const handlePage1Press = () => {
        router.push('/page_1');
    };

    return (
        <View className="bg-blue-500 border-t border-gray-200 flex-row p-8">
            <Text onPress={handleHomePress}
                className="flex-1 text-center text-white font-semibold">
                Home
            </Text>
            <Text onPress={handlePage1Press}
                className="flex-1 text-center text-white font-semibold">
                Page 1
            </Text>
        </View>
    );
}