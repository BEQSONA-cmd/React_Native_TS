import { Stack } from 'expo-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import './global.css';

export default function RootLayout() {

    useEffect(() => {
        NavigationBar.setStyle("light");
    }, []);

    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <Stack screenOptions={{ headerShown: false }} />
                <Footer />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}