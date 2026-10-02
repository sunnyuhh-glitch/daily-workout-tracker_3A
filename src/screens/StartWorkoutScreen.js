import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const exercises = [
  {
    id: '1',
    name: 'Push-ups',
    category: 'Chest',
    sets: 3,
    reps: 12,
    icon: '💪',
  },
  {
    id: '2',
    name: 'Squats',
    category: 'Legs',
    sets: 3,
    reps: 15,
    icon: '🦵',
  },
  {
    id: '3',
    name: 'Lunges',
    category: 'Legs',
    sets: 3,
    reps: 12,
    icon: '🏃',
  },
  {
    id: '4',
    name: 'Plank',
    category: 'Core',
    sets: 3,
    reps: 30,
    icon: '⏱️',
  },
  {
    id: '5',
    name: 'Sit-ups',
    category: 'Core',
    sets: 3,
    reps: 15,
    icon: '🔥',
  },
  {
    id: '6',
    name: 'Jumping Jacks',
    category: 'Cardio',
    sets: 3,
    reps: 20,
    icon: '⭐',
  },
  {
    id: '7',
    name: 'Pull-ups',
    category: 'Back',
    sets: 3,
    reps: 8,
    icon: '🏋️',
  },
  {
    id: '8',
    name: 'Mountain Climbers',
    category: 'Cardio',
    sets: 3,
    reps: 20,
    icon: '⛰️',
  },
];

export default function StartWorkoutScreen({ navigation }) {
  const [workoutName, setWorkoutName] =
    useState("Today's Workout");

  const [selectedExercises, setSelectedExercises] =
    useState([]);

  // Select or deselect an exercise
  const toggleExercise = (exercise) => {
    const isSelected = selectedExercises.some(
      (item) => item.id === exercise.id
    );

    if (isSelected) {
      setSelectedExercises(
        selectedExercises.filter(
          (item) => item.id !== exercise.id
        )
      );
    } else {
      setSelectedExercises([
        ...selectedExercises,
        exercise,
      ]);
    }
  };

  // Start workout and pass selected exercises
  const startWorkout = () => {
    if (selectedExercises.length === 0) {
      return;
    }

    navigation.navigate('RepCounter', {
      workoutName: workoutName.trim() || "Today's Workout",
      exercises: selectedExercises,
      currentExerciseIndex: 0,
    });
  };

  const renderExercise = ({ item }) => {
    const isSelected = selectedExercises.some(
      (exercise) => exercise.id === item.id
    );

    return (
      <TouchableOpacity
        style={[
          styles.exerciseCard,
          isSelected && styles.exerciseCardSelected,
        ]}
        onPress={() => toggleExercise(item)}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.checkBox,
            isSelected && styles.checkBoxSelected,
          ]}
        >
          {isSelected && (
            <Text style={styles.checkMark}>
              ✓
            </Text>
          )}
        </View>

        <View style={styles.exerciseIcon}>
          <Text style={styles.exerciseEmoji}>
            {item.icon}
          </Text>
        </View>

        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>
            {item.name}
          </Text>

          <Text style={styles.exerciseMeta}>
            {item.category} • {item.sets} Sets •{' '}
            {item.reps} Reps
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

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
        {/* Intro */}
        <View style={styles.intro}>
          <Text style={styles.appLabel}>
            NEW SESSION
          </Text>

          <Text style={styles.title}>
            Build Your Workout
          </Text>

          <Text style={styles.subtitle}>
            Give your workout a name and choose the
            exercises you want to complete.
          </Text>
        </View>

        {/* Workout Name */}
        <Text style={styles.sectionLabel}>
          Workout Name
        </Text>

        <TextInput
          style={styles.input}
          value={workoutName}
          onChangeText={setWorkoutName}
          placeholder="Enter workout name"
          placeholderTextColor="#9BA3B0"
          maxLength={30}
        />

        {/* Exercise Header */}
        <View style={styles.exerciseHeader}>
          <Text style={styles.sectionLabel}>
            Choose Exercises
          </Text>

          <View style={styles.selectedBadge}>
            <Text style={styles.selectedBadgeText}>
              {selectedExercises.length} selected
            </Text>
          </View>
        </View>

        {/* Exercise List */}
        <FlatList
          data={exercises}
          renderItem={renderExercise}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        {/* Bottom Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[
              styles.startButton,
              selectedExercises.length === 0 &&
                styles.startButtonDisabled,
            ]}
            onPress={startWorkout}
            disabled={selectedExercises.length === 0}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.startButtonText,
                selectedExercises.length === 0 &&
                  styles.startButtonTextDisabled,
              ]}
            >
              {selectedExercises.length === 0
                ? 'Select an Exercise'
                : `Start Workout • ${selectedExercises.length} ${
                    selectedExercises.length === 1
                      ? 'Exercise'
                      : 'Exercises'
                  }`}
            </Text>

            {selectedExercises.length > 0 && (
              <Text style={styles.buttonArrow}>
                →
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 18,
  },

  intro: {
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
    fontSize: 25,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#7A8494',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  sectionLabel: {
    color: '#1D2A3A',
    fontSize: 14,
    fontWeight: 'bold',
  },

  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E5EA',
    borderRadius: 14,
    paddingHorizontal: 15,
    color: '#1D2A3A',
    fontSize: 13,
    marginTop: 9,
    marginBottom: 22,
  },

  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 11,
  },

  selectedBadge: {
    backgroundColor: '#EEEEFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  selectedBadgeText: {
    color: '#5B5FEF',
    fontSize: 9,
    fontWeight: 'bold',
  },

  listContent: {
    paddingBottom: 10,
  },

  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 16,
    padding: 13,
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  exerciseCardSelected: {
    borderColor: '#5B5FEF',
    backgroundColor: '#F8F8FF',
  },

  checkBox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#C7CDD6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  checkBoxSelected: {
    backgroundColor: '#5B5FEF',
    borderColor: '#5B5FEF',
  },

  checkMark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  exerciseIcon: {
    width: 43,
    height: 43,
    borderRadius: 12,
    backgroundColor: '#EEEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  exerciseEmoji: {
    fontSize: 20,
  },

  exerciseInfo: {
    flex: 1,
  },

  exerciseName: {
    color: '#1D2A3A',
    fontSize: 13,
    fontWeight: 'bold',
  },

  exerciseMeta: {
    color: '#929BAA',
    fontSize: 9,
    marginTop: 4,
  },

  actions: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  startButton: {
    minHeight: 52,
    backgroundColor: '#5B5FEF',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  startButtonDisabled: {
    backgroundColor: '#E0E2E8',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  startButtonTextDisabled: {
    color: '#969EAA',
  },

  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 8,
  },

  cancelButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },

  cancelText: {
    color: '#7A8494',
    fontSize: 12,
    fontWeight: '600',
  },
});