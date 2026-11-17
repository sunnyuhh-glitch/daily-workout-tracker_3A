import AsyncStorage from '@react-native-async-storage/async-storage';

// Key used to identify saved workout records in local storage
const WORKOUTS_STORAGE_KEY = '@DailyWorkoutTracker:workouts';

// Save workout records to local storage
export const saveWorkouts = async (workouts) => {
  try {
    const jsonValue = JSON.stringify(workouts);

    await AsyncStorage.setItem(
      WORKOUTS_STORAGE_KEY,
      jsonValue
    );

    return true;
  } catch (error) {
    console.error('Error saving workouts:', error);
    throw error;
  }
};

// Retrieve workout records from local storage
export const loadWorkouts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(
      WORKOUTS_STORAGE_KEY
    );

    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading workouts:', error);
    throw error;
  }
};


// Add one new workout record
export const addWorkout = async (workout) => {
  try {
    // 1. Get previously saved workouts
    const workouts = await loadWorkouts();

    // 2. Add the new workout to the existing list
    const updatedWorkouts = [...workouts, workout];

    // 3. Save the updated list
    await saveWorkouts(updatedWorkouts);

    // 4. Return the updated list
    return updatedWorkouts;
  } catch (error) {
    console.error('Error adding workout:', error);
    throw error;
  }
};


// Delete all workout records from local storage
export const clearWorkouts = async () => {
  try {
    await AsyncStorage.removeItem(WORKOUTS_STORAGE_KEY);

    return true;
  } catch (error) {
    console.error('Error clearing workouts:', error);
    throw error;
  }
};