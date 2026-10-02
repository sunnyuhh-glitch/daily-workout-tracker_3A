import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F7FB"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.appLabel}>
              DAILY WORKOUT
            </Text>

            <Text style={styles.greeting}>
              Good morning! 👋
            </Text>

            <Text style={styles.subtitle}>
              Ready to get stronger today?
            </Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>
              DW
            </Text>
          </View>
        </View>

        {/* Today's Progress */}
        <View style={styles.progressCard}>
          <Text style={styles.cardLabel}>
            TODAY'S PROGRESS
          </Text>

          <View style={styles.progressStats}>
            <View style={styles.progressStat}>
              <Text style={styles.progressNumber}>
                0
              </Text>

              <Text style={styles.progressStatLabel}>
                Sets
              </Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.progressStat}>
              <Text style={styles.progressNumber}>
                0
              </Text>

              <Text style={styles.progressStatLabel}>
                Reps
              </Text>
            </View>
          </View>

          <View style={styles.goalHeader}>
            <Text style={styles.goalText}>
              Daily Goal: 20 sets
            </Text>

            <Text style={styles.goalPercent}>
              0%
            </Text>
          </View>

          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        {/* Quick Stats */}
        <Text style={styles.sectionTitle}>
          Quick Stats
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Text style={styles.statIcon}>
                🔥
              </Text>
            </View>

            <Text style={styles.statNumber}>
              0
            </Text>

            <Text style={styles.statTitle}>
              Day Streak
            </Text>

            <Text style={styles.statDescription}>
              Keep it going!
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Text style={styles.statIcon}>
                🏆
              </Text>
            </View>

            <Text style={styles.statNumber}>
              0
            </Text>

            <Text style={styles.statTitle}>
              Total Workouts
            </Text>

            <Text style={styles.statDescription}>
              Your journey starts here
            </Text>
          </View>
        </View>

        {/* Start Workout Card */}
        <View style={styles.startCard}>
          <View style={styles.workoutIcon}>
            <Text style={styles.workoutEmoji}>
              🏋️
            </Text>
          </View>

          <Text style={styles.startTitle}>
            Start Your Workout
          </Text>

          <Text style={styles.startDescription}>
            Choose your exercises and track your sets
            and reps as you train.
          </Text>

          <TouchableOpacity
            style={styles.startButton}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('StartWorkout')
            }
          >
            <Text style={styles.startButtonText}>
              Start Workout
            </Text>

            <Text style={styles.buttonArrow}>
              →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tip */}
        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>
            💡
          </Text>

          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>
              Today's Tip
            </Text>

            <Text style={styles.tipText}>
              Focus on proper form before increasing
              your repetitions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  appLabel: {
    color: '#5B5FEF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  greeting: {
    color: '#1D2A3A',
    fontSize: 25,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#7A8494',
    fontSize: 13,
    marginTop: 5,
  },

  profileCircle: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: '#5B5FEF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  progressCard: {
    backgroundColor: '#5B5FEF',
    borderRadius: 22,
    padding: 20,
    marginBottom: 27,
  },

  cardLabel: {
    color: '#D9DAFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.3,
  },

  progressStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 22,
  },

  progressStat: {
    flex: 1,
    alignItems: 'center',
  },

  progressNumber: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: 'bold',
  },

  progressStatLabel: {
    color: '#D9DAFF',
    fontSize: 11,
    marginTop: 3,
  },

  verticalDivider: {
    width: 1,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },

  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  goalText: {
    color: '#E2E3FF',
    fontSize: 11,
  },

  goalPercent: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  progressBarBackground: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressBarFill: {
    width: '0%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  sectionTitle: {
    color: '#1D2A3A',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 13,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 27,
  },

  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
  },

  statIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F0F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  statIcon: {
    fontSize: 19,
  },

  statNumber: {
    color: '#1D2A3A',
    fontSize: 24,
    fontWeight: 'bold',
  },

  statTitle: {
    color: '#4B5563',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },

  statDescription: {
    color: '#A0A7B4',
    fontSize: 9,
    marginTop: 5,
  },

  startCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginBottom: 18,
  },

  workoutIcon: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#EEEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  workoutEmoji: {
    fontSize: 30,
  },

  startTitle: {
    color: '#1D2A3A',
    fontSize: 19,
    fontWeight: 'bold',
  },

  startDescription: {
    color: '#7A8494',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  startButton: {
    width: '100%',
    height: 51,
    backgroundColor: '#5B5FEF',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 9,
  },

  tipCard: {
    backgroundColor: '#FFF9E8',
    borderRadius: 17,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  tipIcon: {
    fontSize: 24,
    marginRight: 13,
  },

  tipContent: {
    flex: 1,
  },

  tipTitle: {
    color: '#6D5B25',
    fontSize: 12,
    fontWeight: 'bold',
  },

  tipText: {
    color: '#8C7B49',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },
});