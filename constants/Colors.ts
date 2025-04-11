/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

// Define light and dark theme colors
export const LightThemeColors = {
  background: '#ffffff',
  text: '#ffffff',
  primary: '#bb86fc', // Purple color
  secondary: '#f9f9f9',
  border: '#ccc',
};

export const DarkThemeColors = {
  background: '#121212',
  text: '#ffffff',
  primary: '#bb86fc',
  secondary: '#1e1e1e',
  border: '#333',
};
