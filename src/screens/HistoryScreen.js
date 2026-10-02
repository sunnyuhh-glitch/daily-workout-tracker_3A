import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// Sample workout history for the MCO1 prototype.
// Persistent workout saving will be implemented in MCO2.
const workoutHistory = [
  {
    id: '1',
    name: 'Full Body Workout',
    date: 'Today',
    exercises: 3,
    sets: 9,
    reps: 108,
    icon: '🏋️',
  },
  {
    id: '2',
    name: 'Upper Body',
    date: 'Yesterday',
    exercises: 2,
    sets: 6,
    reps: 66,
    icon: '💪',
  },
  {
    id: '3',
    name: 'Core Workout',
    date: 'September 28',
    exercises: 2,
    sets: 6,
    reps: 60,
    icon: '🔥',
  },
];

export default function HistoryScreen() {
  const totalSessions = workoutHistory.length;

  const totalReps = workoutHistory.reduce(
    (total, workout) => total + workout.reps,
    0
  );

  const totalSets = workoutHistory.reduce(
    (total, workout) => total + workout.sets,
    0
  );

  const renderWorkout = ({ item }) => (
    <View style={styles.workoutCard}>
      <View style={styles.cardTop}>
        <View style={styles.workoutIcon}>
          <Text style={styles.workoutEmoji}>
            {item.icon}
          </Text>
        </View>

        <View style={styles.workoutInfo}>
          <Text style={styles.workoutName}>
            {item.name}
          </Text>

          <Text style={styles.workoutDate}>
            {item.date}
          </Text>
        </View>

        <View style={styles.completeBadge}>
          <Text style={styles.completeText}>
            Completed
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            {item.exercises}
          </Text>

          <Text style={styles.statLabel}>
            Exercises
          </Text>
        </View>

        <View style={styles.smallDivider} />

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            {item.sets}
          </Text>

          <Text style={styles.statLabel}>
            Sets
          </Text>
        </View>

        <View style={styles.smallDivider} />

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            {item.reps}
          </Text>

          <Text style={styles.statLabel}>
            Reps
          </Text>
        </View>
      </View>
    </View>
  );

  const ListHeader = () => (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appLabel}>
          WORKOUT ACTIVITY
        </Text>

        <Text style={styles.title}>
          Workout History
        </Text>

        <Text style={styles.subtitle}>
          Review your recent training sessions.
        </Text>
      </View>

      {/* Overall Statistics */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryNumber}>
            {totalSessions}
          </Text>

          <Text style={styles.summaryLabel}>
            Sessions
          </Text>
        </View>

        <View style={styles.summaryDivider} />

        <View style={styles.summaryItem}>
          <Text style={styles.summaryNumber}>
            {totalSets}
          </Text>

          <Text style={styles.summaryLabel}>
            Total Sets
          </Text>
        </View>

        <View style={styles.summaryDivider} />

        <View style={styles.summaryItem}>
          <Text style={styles.summaryNumber}>
            {totalReps}
          </Text>

          <Text style={styles.summaryLabel}>
            Total Reps
          </Text>
        </View>
      </View>

      {/* Prototype Notice */}
      <View style={styles.prototypeNotice}>
        <Text style={styles.prototypeIcon}>
          ℹ️
        </Text>

        <Text style={styles.prototypeText}>
          Sample workout history for prototype preview.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Recent Workouts
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F7FB"
      />

      <FlatList
        data={workoutHistory}
        renderItem={renderWorkout}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 22,
  },

  appLabel: {
    color: '#5B5FEF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  title: {
    color: '#1D2A3A',
    fontSize: 27,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#7A8494',
    fontSize: 13,
    marginTop: 5,
  },

  summaryCard: {
    backgroundColor: '#5B5FEF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },

  summaryNumber: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  summaryLabel: {
    color: '#D9DAFF',
    fontSize: 9,
    marginTop: 4,
  },

  summaryDivider: {
    width: 1,
    height: 38,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },

  prototypeNotice: {
    backgroundColor: '#EEEEFF',
    borderRadius: 13,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  prototypeIcon: {
    color: '#5B5FEF',
    fontSize: 15,
    marginRight: 8,
  },

  prototypeText: {
    color: '#686CB7',
    fontSize: 9,
    flex: 1,
  },

  sectionTitle: {
    color: '#1D2A3A',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  workoutCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  workoutIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    backgroundColor: '#EEEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  workoutEmoji: {
    fontSize: 22,
  },

  workoutInfo: {
    flex: 1,
  },

  workoutName: {
    color: '#1D2A3A',
    fontSize: 13,
    fontWeight: 'bold',
  },

  workoutDate: {
    color: '#929BAA',
    fontSize: 9,
    marginTop: 4,
  },

  completeBadge: {
    backgroundColor: '#E8F7EF',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },

  completeText: {
    color: '#28A86B',
    fontSize: 8,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    backgroundColor: '#EFF0F3',
    marginVertical: 13,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    color: '#1D2A3A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  statLabel: {
    color: '#929BAA',
    fontSize: 8,
    marginTop: 2,
  },

  smallDivider: {
    width: 1,
    height: 27,
    backgroundColor: '#E8EAEE',
  },
});