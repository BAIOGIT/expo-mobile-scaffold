import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

import EditScreenInfo from '@/components/EditScreenInfo';

const TabProfiloScreen: React.FC<HomeScreenProps> = ({ navigaton }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Benveuto in Swell</Text>
          <Link href="/subscriptions" asChild>
            <Button
              mode="contained"
              buttonColor={Colors[colorScheme ?? 'light'].tint}
            >
              Vai agli abbonamenti
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
}

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

export default TabProfiloScreen;