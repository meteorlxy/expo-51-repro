import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Expo51Repro.web.ts
// and on native platforms to Expo51Repro.ts
import Expo51ReproModule from './Expo51ReproModule';
import Expo51ReproView from './Expo51ReproView';
import { ChangeEventPayload, Expo51ReproViewProps } from './Expo51Repro.types';

// Get the native constant value.
export const PI = Expo51ReproModule.PI;

export function hello(): string {
  return Expo51ReproModule.hello();
}

export async function setValueAsync(value: string) {
  return await Expo51ReproModule.setValueAsync(value);
}

const emitter = new EventEmitter(Expo51ReproModule ?? NativeModulesProxy.Expo51Repro);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { Expo51ReproView, Expo51ReproViewProps, ChangeEventPayload };
