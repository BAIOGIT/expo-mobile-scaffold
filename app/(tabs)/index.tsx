// HomeScreen.tsx
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './types';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

import { Link, Tabs } from 'expo-router';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Benveuto in Swell</Text>
          <Link href="/modal" asChild>
            <Button
              mode="contained"
              buttonColor={Colors[colorScheme ?? 'light'].tint}
            >
              Vai ai dettagli
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
});

export default HomeScreen;