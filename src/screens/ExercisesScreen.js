import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

// Hardcoded exercise data for the MCO1 prototype
const exercises = [
  {
    id: '1',
    name: 'Push-ups',
    category: 'Chest',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 12,
    icon: '💪',
  },
  {
    id: '2',
    name: 'Squats',
    category: 'Legs',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 15,
    icon: '🦵',
  },
  {
    id: '3',
    name: 'Lunges',
    category: 'Legs',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 12,
    icon: '🏃',
  },
  {
    id: '4',
    name: 'Plank',
    category: 'Core',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 30,
    icon: '⏱️',
  },
  {
    id: '5',
    name: 'Sit-ups',
    category: 'Core',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 15,
    icon: '🔥',
  },
  {
    id: '6',
    name: 'Jumping Jacks',
    category: 'Cardio',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 20,
    icon: '⭐',
  },
  {
    id: '7',
    name: 'Pull-ups',
    category: 'Back',
    equipment: 'Pull-up Bar',
    sets: 3,
    reps: 8,
    icon: '🏋️',
  },
  {
    id: '8',
    name: 'Mountain Climbers',
    category: 'Cardio',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 20,
    icon: '⛰️',
  },
];

const categories = [
  'All',
  'Chest',
  'Legs',
  'Core',
  'Cardio',
  'Back',
];

export default function ExercisesScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState('All');

  // Show all exercises or only exercises from
  // the selected category
  const filteredExercises =
    selectedCategory === 'All'
      ? exercises
      : exercises.filter(
          (exercise) =>
            exercise.category === selectedCategory
        );

  const renderExercise = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.exerciseCard}
        activeOpacity={0.8}
        onPress={() => {}}
      >
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
            {item.category} • {item.equipment}
          </Text>

          <View style={styles.targetRow}>
            <View style={styles.targetBadge}>
              <Text style={styles.targetText}>
                {item.sets} Sets
              </Text>
            </View>

            <View style={styles.targetBadge}>
              <Text style={styles.targetText}>
                {item.reps} Reps
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.arrow}>
          ›
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F7FB"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appLabel}>
          EXERCISE LIBRARY
        </Text>

        <Text style={styles.title}>
          Exercises
        </Text>

        <Text style={styles.subtitle}>
          Browse exercises for your daily workout.
        </Text>
      </View>

      {/* Category Filter */}
      <View style={styles.categorySection}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => {
            const isSelected =
              selectedCategory === item;

            return (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  isSelected &&
                    styles.categoryButtonSelected,
                ]}
                onPress={() =>
                  setSelectedCategory(item)
                }
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isSelected &&
                      styles.categoryTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Exercise Count */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>
          {selectedCategory === 'All'
            ? 'All Exercises'
            : `${selectedCategory} Exercises`}
        </Text>

        <Text style={styles.exerciseCount}>
          {filteredExercises.length}{' '}
          {filteredExercises.length === 1
            ? 'exercise'
            : 'exercises'}
        </Text>
      </View>

      {/* Exercise List */}
      <FlatList
        data={filteredExercises}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.exerciseList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,
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

  categorySection: {
    marginBottom: 20,
  },

  categoryList: {
    paddingHorizontal: 20,
  },

  categoryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E6EC',
    borderRadius: 20,
    paddingHorizontal: 17,
    paddingVertical: 9,
    marginRight: 8,
  },

  categoryButtonSelected: {
    backgroundColor: '#5B5FEF',
    borderColor: '#5B5FEF',
  },

  categoryText: {
    color: '#727B8B',
    fontSize: 11,
    fontWeight: '600',
  },

  categoryTextSelected: {
    color: '#FFFFFF',
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  listTitle: {
    color: '#1D2A3A',
    fontSize: 16,
    fontWeight: 'bold',
  },

  exerciseCount: {
    color: '#929BAA',
    fontSize: 10,
  },

  exerciseList: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },

  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },

  exerciseIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#EEEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  exerciseEmoji: {
    fontSize: 25,
  },

  exerciseInfo: {
    flex: 1,
  },

  exerciseName: {
    color: '#1D2A3A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  exerciseMeta: {
    color: '#929BAA',
    fontSize: 10,
    marginTop: 4,
  },

  targetRow: {
    flexDirection: 'row',
    marginTop: 8,
  },

  targetBadge: {
    backgroundColor: '#F2F3FF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
  },

  targetText: {
    color: '#5B5FEF',
    fontSize: 9,
    fontWeight: '600',
  },

  arrow: {
    color: '#A5ACB8',
    fontSize: 27,
    marginLeft: 7,
  },
});