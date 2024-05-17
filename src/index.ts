import Expo51ReproModule from './Expo51ReproModule';

export function promiseNullFromKotlin(): Promise<void> {
  return Expo51ReproModule.promiseNullFromKotlin();
}

export function promiseNullFromJava(): Promise<void> {
  return Expo51ReproModule.promiseNullFromJava();
}

export function promiseBooleanFromJava(): Promise<boolean> {
  return Expo51ReproModule.promiseBooleanFromJava();
}
