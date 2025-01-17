/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light // Ensure 'colorName' is a key of 'light' or 'dark' properties
) {
  const theme = useColorScheme() ?? 'light'; // Default to 'light' theme if undefined
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps; // If the color is provided via props, return it
  } else {
    return Colors[theme][colorName]; // Access the appropriate theme color
  }
}
