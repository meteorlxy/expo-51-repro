import * as Expo51Repro from 'expo-51-repro';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [promiseNullFromKotlinResult, setPromiseNullFromKotlinResult] =
    useState<string | null>(null);
  const [promiseNullFromJavaResult, setPromiseNullFromJavaResult] = useState<
    string | null
  >(null);
  const [promiseBooleanFromJavaResult, setPromiseBooleanFromJavaResult] =
    useState<string | null>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          try {
            setPromiseNullFromKotlinResult(null);
            const result = await Expo51Repro.promiseNullFromKotlin();
            setPromiseNullFromKotlinResult(
              `Promise from kotlin resolved: ${result}`,
            );
          } catch (e) {
            setPromiseNullFromKotlinResult(
              e instanceof Error ? e.message : `Error: ${e}`,
            );
          }
        }}
      >
        <Text>Click to call promiseNullFromKotlin</Text>
      </TouchableOpacity>

      <Text>{promiseNullFromKotlinResult}</Text>

      <View style={styles.divider} />

      <TouchableOpacity
        onPress={async () => {
          try {
            setPromiseNullFromJavaResult(null);
            const result = await Expo51Repro.promiseNullFromJava();
            setPromiseNullFromJavaResult(
              `Promise from java resolved: ${result}`,
            );
          } catch (e) {
            setPromiseNullFromJavaResult(
              e instanceof Error ? e.message : `Error: ${e}`,
            );
          }
        }}
      >
        <Text>Click to call promiseNullFromJava</Text>
      </TouchableOpacity>

      <Text>{promiseNullFromJavaResult}</Text>

      <View style={styles.divider} />

      <TouchableOpacity
        onPress={async () => {
          try {
            setPromiseBooleanFromJavaResult(null);
            const result = await Expo51Repro.promiseBooleanFromJava();
            setPromiseBooleanFromJavaResult(
              `Promise from java resolved: ${result}`,
            );
          } catch (e) {
            setPromiseBooleanFromJavaResult(
              e instanceof Error ? e.message : `Error: ${e}`,
            );
          }
        }}
      >
        <Text>Click to call promiseBooleanFromJava</Text>
      </TouchableOpacity>

      <Text>{promiseBooleanFromJavaResult}</Text>
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
  divider: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});
