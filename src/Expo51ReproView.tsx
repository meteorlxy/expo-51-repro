import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { Expo51ReproViewProps } from './Expo51Repro.types';

const NativeView: React.ComponentType<Expo51ReproViewProps> =
  requireNativeViewManager('Expo51Repro');

export default function Expo51ReproView(props: Expo51ReproViewProps) {
  return <NativeView {...props} />;
}
