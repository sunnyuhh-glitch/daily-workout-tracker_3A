import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import {
  loadWorkouts,
  addWorkout as saveWorkout,
} from '../utils/storage';

// 1. Create the Workout Context
const WorkoutContext = createContext();

// 2. Create the Workout Provider
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // Load saved workouts when the provider starts
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const savedWorkouts = await loadWorkouts();

        setWorkouts(savedWorkouts);
      } catch (error) {
        console.error('Error loading workouts:', error);
      }
    };

    getWorkouts();
  }, []);

  // Add a workout and update the shared state
  const addWorkoutToContext = async (workout) => {
    try {
      const updatedWorkouts = await saveWorkout(workout);

      setWorkouts(updatedWorkouts);

      return updatedWorkouts;
    } catch (error) {
      console.error('Error adding workout to context:', error);
      throw error;
    }
  };

  // 3. Share workout data and its updater
  const value = {
    workouts,
    setWorkouts,
    addWorkout: addWorkoutToContext,
  };

  return (
    <WorkoutContext.Provider value={value}>
      {children}
    </WorkoutContext.Provider>
  );
};

// 4. Custom hook for accessing Workout Context
export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error('useWorkout must be used inside WorkoutProvider');
  }

  return context;
};