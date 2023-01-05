import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from './src/context/CurrencyContext';
import LandingPage from './src/screens/LandingPage';


export default function App() {
  return (
   <Provider>
     <LandingPage/>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
