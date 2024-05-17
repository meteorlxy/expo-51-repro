import { StyleSheet, Text, View } from 'react-native';

import * as Expo51Repro from 'expo-51-repro';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Expo51Repro.hello()}</Text>
    </View>
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
