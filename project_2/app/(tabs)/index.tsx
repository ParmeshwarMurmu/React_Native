import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View>
      <Text style={{marginTop: 50, marginLeft: 20, fontSize: 20}}>Hello how are you</Text>
      <Text style={{marginTop: 50, marginLeft: 20, fontSize: 20}}>I am good</Text>
      <Text style={{marginTop: 50, marginLeft: 20, fontSize: 20}}>My name is parmeswar</Text>
      {/* <Text style={{marginTop: 50, marginLeft: 20, fontSize: 20}}></Text> */}
    </View>
  )
}


