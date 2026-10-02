import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import StartWorkoutScreen from './src/screens/StartWorkoutScreen';
import RepCounterScreen from './src/screens/RepCounterScreen';
import WorkoutSummaryScreen from './src/screens/WorkoutSummaryScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#5B5FEF',

        tabBarInactiveTintColor: '#8E96A5',

        tabBarStyle: {
          height: 65,
          paddingTop: 6,
          paddingBottom: 7,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <TabIcon icon="⌂" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color }) => (
            <TabIcon icon="◆" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <TabIcon icon="◷" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <TabIcon icon="●" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabIcon({ icon, color }) {
  return (
    <React.Fragment>
      {React.createElement(
        require('react-native').Text,
        {
          style: {
            color,
            fontSize: 21,
            fontWeight: 'bold',
          },
        },
        icon
      )}
    </React.Fragment>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5B5FEF',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="StartWorkout"
          component={StartWorkoutScreen}
          options={{
            title: 'Start Workout',
          }}
        />

        <Stack.Screen
          name="RepCounter"
          component={RepCounterScreen}
          options={{
            title: 'Workout',
          }}
        />

        <Stack.Screen
          name="WorkoutSummary"
          component={WorkoutSummaryScreen}
          options={{
            title: 'Summary',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}