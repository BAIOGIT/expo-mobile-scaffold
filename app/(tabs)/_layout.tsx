import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: 0 }} {...props} />;
}

// Import your global CSS file
import "../../global.css"


const styles = StyleSheet.create({
  tabBar: {
    // borderRadius: 16,  // Border radius for rounded corners
    // shadowColor: '#000',  // Shadow color
    // shadowOffset: { width: 0, height: 2 },  // Shadow offset
    // shadowOpacity: 0.1,  // Shadow opacity
    // shadowRadius: 6,  // Shadow blur radius
    // elevation: 10,  // Android shadow elevation
    backgroundColor: '#fff',  // Tab bar background color
    // padding: 10,
    // margin: 10,  // Margin from bottom
  },
  tabBarIcon: {
    marginBottom: 0, // Adjust margin as needed
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: styles.tabBar,  // Apply the custom tab bar styles
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          // title: 'Home',
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={28}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Cerca"
        options={{
          title: 'Cerca',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profilo"
        options={{
          title: 'Accedi',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
