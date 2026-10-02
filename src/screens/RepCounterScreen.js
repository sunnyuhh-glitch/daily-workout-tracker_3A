import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function RepCounterScreen({
  navigation,
  route,
}) {
  // Receive data from StartWorkoutScreen
  const {
    workoutName,
    exercises,
    currentExerciseIndex = 0,
  } = route.params;

  // Current exercise being performed
  const currentExercise =
    exercises[currentExerciseIndex];

  // State for repetition counter
  const [reps, setReps] = useState(
    currentExercise.reps
  );

  // Stores completed sets for the current exercise
  const [completedSets, setCompletedSets] =
    useState([]);

  // Increase reps
  const increaseReps = () => {
    setReps(reps + 1);
  };

  // Decrease reps but never below 1
  const decreaseReps = () => {
    if (reps > 1) {
      setReps(reps - 1);
    }
  };

  // Save the current set
  const completeSet = () => {
    if (
      completedSets.length >= currentExercise.sets
    ) {
      return;
    }

    const newSet = {
      id: Date.now().toString(),
      setNumber: completedSets.length + 1,
      reps: reps,
    };

    setCompletedSets([
      ...completedSets,
      newSet,
    ]);
  };

  const allSetsCompleted =
    completedSets.length >= currentExercise.sets;

  const isLastExercise =
    currentExerciseIndex === exercises.length - 1;

  // Go to the next selected exercise
  const nextExercise = () => {
    navigation.replace('RepCounter', {
      workoutName,
      exercises,
      currentExerciseIndex:
        currentExerciseIndex + 1,
    });
  };

  // Finish the workout
  const finishWorkout = () => {
    navigation.navigate('WorkoutSummary', {
      workoutName,
      totalExercises: exercises.length,
    });
  };

  const renderCompletedSet = ({ item }) => (
    <View style={styles.completedSet}>
      <View style={styles.completedIcon}>
        <Text style={styles.checkMark}>
          ✓
        </Text>
      </View>

      <Text style={styles.setName}>
        Set {item.setNumber}
      </Text>

      <Text style={styles.setReps}>
        {item.reps} reps
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={styles.container}
      edges={['bottom']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5B5FEF"
      />

      <View style={styles.content}>
        {/* Workout Information */}
        <View style={styles.topSection}>
          <Text style={styles.workoutName}>
            {workoutName}
          </Text>

          <Text style={styles.exerciseProgress}>
            Exercise {currentExerciseIndex + 1} of{' '}
            {exercises.length}
          </Text>
        </View>

        {/* Current Exercise */}
        <View style={styles.exerciseCard}>
          <View style={styles.exerciseIcon}>
            <Text style={styles.exerciseEmoji}>
              {currentExercise.icon}
            </Text>
          </View>

          <Text style={styles.exerciseName}>
            {currentExercise.name}
          </Text>

          <Text style={styles.exerciseCategory}>
            {currentExercise.category}
          </Text>

          <View style={styles.targetBadge}>
            <Text style={styles.targetText}>
              Target: {currentExercise.sets} Sets ×{' '}
              {currentExercise.reps} Reps
            </Text>
          </View>
        </View>

        {/* Rep Counter */}
        <View style={styles.counterSection}>
          <Text style={styles.counterLabel}>
            REPETITIONS
          </Text>

          <View style={styles.counterRow}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={decreaseReps}
              activeOpacity={0.7}
            >
              <Text style={styles.counterButtonText}>
                −
              </Text>
            </TouchableOpacity>

            <View style={styles.repDisplay}>
              <Text style={styles.repNumber}>
                {reps}
              </Text>

              <Text style={styles.repLabel}>
                reps
              </Text>
            </View>

            <TouchableOpacity
              style={styles.counterButton}
              onPress={increaseReps}
              activeOpacity={0.7}
            >
              <Text style={styles.counterButtonText}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.setProgress}>
            Set{' '}
            {Math.min(
              completedSets.length + 1,
              currentExercise.sets
            )}{' '}
            of {currentExercise.sets}
          </Text>
        </View>

        {/* Complete Set */}
        {!allSetsCompleted && (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={completeSet}
            activeOpacity={0.8}
          >
            <Text style={styles.completeButtonText}>
              Complete Set
            </Text>

            <Text style={styles.completeIcon}>
              ✓
            </Text>
          </TouchableOpacity>
        )}

        {/* Completed Sets */}
        <View style={styles.completedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Completed Sets
            </Text>

            <Text style={styles.setCount}>
              {completedSets.length}/
              {currentExercise.sets}
            </Text>
          </View>

          {completedSets.length === 0 ? (
            <View style={styles.emptySets}>
              <Text style={styles.emptyText}>
                Complete your first set to see it here.
              </Text>
            </View>
          ) : (
            <FlatList
              data={completedSets}
              renderItem={renderCompletedSet}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>

        {/* Continue Button */}
        {allSetsCompleted && (
          <View style={styles.continueSection}>
            <View style={styles.successMessage}>
              <Text style={styles.successIcon}>
                🎉
              </Text>

              <View style={styles.successContent}>
                <Text style={styles.successTitle}>
                  Exercise Complete!
                </Text>

                <Text style={styles.successText}>
                  You completed all{' '}
                  {currentExercise.sets} sets.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={
                isLastExercise
                  ? finishWorkout
                  : nextExercise
              }
              activeOpacity={0.8}
            >
              <Text style={styles.nextButtonText}>
                {isLastExercise
                  ? 'Finish Workout'
                  : 'Next Exercise'}
              </Text>

              <Text style={styles.nextArrow}>
                {isLastExercise ? '✓' : '→'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 15,
  },

  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },

  workoutName: {
    color: '#1D2A3A',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },

  exerciseProgress: {
    color: '#5B5FEF',
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: '#EEEEFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    marginBottom: 19,
  },

  exerciseIcon: {
    width: 57,
    height: 57,
    borderRadius: 18,
    backgroundColor: '#EEEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  exerciseEmoji: {
    fontSize: 27,
  },

  exerciseName: {
    color: '#1D2A3A',
    fontSize: 21,
    fontWeight: 'bold',
  },

  exerciseCategory: {
    color: '#929BAA',
    fontSize: 11,
    marginTop: 3,
  },

  targetBadge: {
    backgroundColor: '#F2F3FF',
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 6,
    marginTop: 11,
  },

  targetText: {
    color: '#5B5FEF',
    fontSize: 10,
    fontWeight: '600',
  },

  counterSection: {
    alignItems: 'center',
    marginBottom: 17,
  },

  counterLabel: {
    color: '#929BAA',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  counterRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  counterButton: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E5EA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  counterButtonText: {
    color: '#5B5FEF',
    fontSize: 29,
    fontWeight: '500',
  },

  repDisplay: {
    width: 115,
    alignItems: 'center',
  },

  repNumber: {
    color: '#1D2A3A',
    fontSize: 42,
    fontWeight: 'bold',
  },

  repLabel: {
    color: '#929BAA',
    fontSize: 10,
    marginTop: -3,
  },

  setProgress: {
    color: '#697386',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 8,
  },

  completeButton: {
    minHeight: 50,
    backgroundColor: '#5B5FEF',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19,
  },

  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  completeIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  completedSection: {
    flex: 1,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },

  sectionTitle: {
    color: '#1D2A3A',
    fontSize: 14,
    fontWeight: 'bold',
  },

  setCount: {
    color: '#5B5FEF',
    fontSize: 10,
    fontWeight: 'bold',
  },

  emptySets: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },

  emptyText: {
    color: '#9BA3B0',
    fontSize: 10,
  },

  completedSet: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  completedIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#E8F7EF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  checkMark: {
    color: '#28A86B',
    fontSize: 12,
    fontWeight: 'bold',
  },

  setName: {
    color: '#1D2A3A',
    fontSize: 11,
    fontWeight: '600',
    flex: 1,
  },

  setReps: {
    color: '#697386',
    fontSize: 10,
  },

  continueSection: {
    marginTop: 8,
  },

  successMessage: {
    backgroundColor: '#EAF8F0',
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  successIcon: {
    fontSize: 23,
    marginRight: 10,
  },

  successContent: {
    flex: 1,
  },

  successTitle: {
    color: '#23895A',
    fontSize: 11,
    fontWeight: 'bold',
  },

  successText: {
    color: '#5E8B73',
    fontSize: 9,
    marginTop: 2,
  },

  nextButton: {
    minHeight: 50,
    backgroundColor: '#1D2A3A',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  nextArrow: {
    color: '#FFFFFF',
    fontSize: 17,
    marginLeft: 8,
  },
});