import * as React from 'react';

import { Expo51ReproViewProps } from './Expo51Repro.types';

export default function Expo51ReproView(props: Expo51ReproViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
