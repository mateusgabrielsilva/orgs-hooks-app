import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela} >
      <StatusBar style="dark" />
      <Home />
    </SafeAreaView >
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})