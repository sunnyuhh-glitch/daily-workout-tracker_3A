import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
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
          <Text style={styles.appLabel}>
            MY PROFILE
          </Text>

          <Text style={styles.title}>
            Profile
          </Text>

          <Text style={styles.subtitle}>
            Your workout goals at a glance.
          </Text>
        </View>

        {/* Profile Information */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              DW
            </Text>
          </View>

          <Text style={styles.userName}>
            Daily Workout User
          </Text>

          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              Beginner
            </Text>
          </View>

          <Text style={styles.profileDescription}>
            Keep moving, stay consistent, and build
            stronger habits one workout at a time.
          </Text>
        </View>

        {/* Daily Goal */}
        <View style={styles.goalCard}>
          <View>
            <Text style={styles.goalLabel}>
              DAILY GOAL
            </Text>

            <Text style={styles.goalDescription}>
              Target sets per day
            </Text>
          </View>

          <View style={styles.goalValueContainer}>
            <Text style={styles.goalNumber}>
              20
            </Text>

            <Text style={styles.goalUnit}>
              Sets
            </Text>
          </View>
        </View>

        {/* Profile Stats */}
        <Text style={styles.sectionTitle}>
          Profile Stats
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Text style={styles.statEmoji}>
                🏋️
              </Text>
            </View>

            <Text style={styles.statNumber}>
              0
            </Text>

            <Text style={styles.statLabel}>
              Workouts
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Text style={styles.statEmoji}>
                🔥
              </Text>
            </View>

            <Text style={styles.statNumber}>
              0
            </Text>

            <Text style={styles.statLabel}>
              Total Reps
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Text style={styles.statEmoji}>
                ⚡
              </Text>
            </View>

            <Text style={styles.statNumber}>
              0
            </Text>

            <Text style={styles.statLabel}>
              Day Streak
            </Text>
          </View>
        </View>

        {/* About App */}
        <Text style={styles.sectionTitle}>
          About This App
        </Text>

        <View style={styles.aboutCard}>
          <View style={styles.appIcon}>
            <Text style={styles.appEmoji}>
              🏋️
            </Text>
          </View>

          <View style={styles.aboutContent}>
            <Text style={styles.appName}>
              Daily Workout & Rep Tracker
            </Text>

            <Text style={styles.aboutDescription}>
              A simple mobile workout prototype for
              selecting exercises, tracking sets and
              repetitions, and reviewing workout
              activity.
            </Text>

            <View style={styles.versionBadge}>
              <Text style={styles.versionText}>
                MCO1 Prototype • Version 1.0
              </Text>
            </View>
          </View>
        </View>

        {/* Prototype Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>
            ℹ️
          </Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Prototype Mode
            </Text>

            <Text style={styles.infoText}>
              Workout data is temporary and resets
              when the application reloads. Persistent
              storage is planned for the full version.
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

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginBottom: 16,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#5B5FEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  userName: {
    color: '#1D2A3A',
    fontSize: 18,
    fontWeight: 'bold',
  },

  levelBadge: {
    backgroundColor: '#EEEEFF',
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 5,
    marginTop: 7,
  },

  levelText: {
    color: '#5B5FEF',
    fontSize: 9,
    fontWeight: 'bold',
  },

  profileDescription: {
    color: '#8B94A3',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 12,
  },

  goalCard: {
    backgroundColor: '#5B5FEF',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  goalLabel: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },

  goalDescription: {
    color: '#D9DAFF',
    fontSize: 9,
    marginTop: 5,
  },

  goalValueContainer: {
    alignItems: 'center',
  },

  goalNumber: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  goalUnit: {
    color: '#D9DAFF',
    fontSize: 9,
  },

  sectionTitle: {
    color: '#1D2A3A',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  statCard: {
    width: '31.5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
  },

  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#F0F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  statEmoji: {
    fontSize: 16,
  },

  statNumber: {
    color: '#1D2A3A',
    fontSize: 19,
    fontWeight: 'bold',
  },

  statLabel: {
    color: '#929BAA',
    fontSize: 8,
    marginTop: 3,
  },

  aboutCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 14,
  },

  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#EEEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  appEmoji: {
    fontSize: 23,
  },

  aboutContent: {
    flex: 1,
  },

  appName: {
    color: '#1D2A3A',
    fontSize: 13,
    fontWeight: 'bold',
  },

  aboutDescription: {
    color: '#8B94A3',
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },

  versionBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F2F3FF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 9,
  },

  versionText: {
    color: '#5B5FEF',
    fontSize: 8,
    fontWeight: '600',
  },

  infoCard: {
    backgroundColor: '#FFF8E6',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  infoIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: '#756126',
    fontSize: 11,
    fontWeight: 'bold',
  },

  infoText: {
    color: '#8D7B4B',
    fontSize: 9,
    lineHeight: 14,
    marginTop: 3,
  },
});