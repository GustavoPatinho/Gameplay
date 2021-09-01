import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

type ImageProps = {
  urlImage: string;
}

export function Avatar({ urlImage }: ImageProps) {
  const { secondary50, secondary70 } = theme.colors
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )
}