import React, { createContext, useContext, useState } from 'react';

// 1. Create the Workout Context
const WorkoutContext = createContext();

// 2. Create the Workout Provider
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // 3. Share workout data and its updater
  const value = {
    workouts,
    setWorkouts,
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