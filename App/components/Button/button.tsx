import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {MainColour} from '../../helpers/colors';

interface ButtonProps {
  $primary?: boolean; // Optional, defaults to true
  $bblRadius?: string; // Optional, defaults to '0'
  $bbrRadius?: string; // Optional, defaults to '0'
  $btlRadius?: string; // Optional, defaults to '0'
  $btrRadius?: string; // Optional, defaults to '0'
  $marginLeft?: string; // Optional, defaults to '0'
  $brWidth?: string; // Optional, defaults to '0'
  $brColor?: string; // Optional, defaults to 'transparent'
  $position?: 'relative' | 'absolute'; // Restricted to allowed values
  $borderWidth?: string; // Optional, defaults to '1'
  $width?: string; // Optional, defaults to '100'
  $padding?: string; // Optional, defaults to '10'
  $marginTop?: string; // Optional, defaults to '0'
  $borderColor?: string;
  $alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  $marginRight?: string;
  $onPress?: () => void; // Define the onPress prop
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  $primary = true, // Default to true
  $bblRadius = '0', // Default to '0'
  $bbrRadius = '0', // Default to '0'
  $btlRadius = '0', // Default to '0'
  $btrRadius = '0', // Default to '0'
  $marginLeft = '0', // Default to '0'
  $brWidth = '0', // Default to '0'
  $brColor = 'transparent', // Default to 'transparent'
  $position = 'relative', // Default to 'relative'
  $borderWidth = '1', // Default to '1'
  $width = 'auto', // Default to '100'
  $padding = '10', // Default to '10'
  $marginTop = '0', // Default to '0'
  $marginRight = '0', // Default to '0'
  $borderColor = 'transparent',
  $alignItems = 'center',
  $onPress = () => {}, // Default function is a no-op
  children,
}) => {
  // Event handler for button click
  const handlePress = () => {
    if ($onPress) {
      $onPress(); // Call the passed onPress function
    }
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: $brColor,
      color: MainColour($primary).primaryColour,
      padding: parseFloat($padding),
      alignItems: $alignItems,
      alignSelf: 'center',
      width: `${$width}`,
      borderBottomLeftRadius: parseFloat($bblRadius),
      borderBottomRightRadius: parseFloat($bbrRadius),
      borderTopLeftRadius: parseFloat($btlRadius),
      borderTopRightRadius: parseFloat($btrRadius),
      borderRightColor: MainColour($primary).secondaryColour,
      borderRightWidth: parseFloat($brWidth),
      marginLeft: parseFloat($marginLeft),
      marginTop: parseFloat($marginTop),
      marginRight: parseFloat($marginRight),
      position: $position,
      borderColor: $borderColor,
      borderWidth: parseFloat($borderWidth),
    },
    text: {
      color: MainColour($primary).primaryColour,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
