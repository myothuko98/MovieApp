import React from 'react';
import { TouchableWithoutFeedback, type TouchableWithoutFeedbackProps } from 'react-native';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: TouchableWithoutFeedbackProps) {
  return (
    <TouchableWithoutFeedback
      {...props}
      onPressIn={(event) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        props.onPressIn?.(event);
      }}
    />
  );
}
