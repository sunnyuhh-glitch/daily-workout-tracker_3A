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
    // 1. Check if the workout is a valid object
    if (
      !workout ||
      typeof workout !== 'object' ||
      Array.isArray(workout)
    ) {
      throw new Error('Invalid workout record.');
    }

    // 2. Check if the workout has an ID
    if (
      workout.id === undefined ||
      workout.id === null ||
      String(workout.id).trim() === ''
    ) {
      throw new Error('Workout ID is required.');
    }

    // 3. Check if the workout has a valid name
    if (
      typeof workout.workoutName !== 'string' ||
      workout.workoutName.trim() === ''
    ) {
      throw new Error('Workout name is required.');
    }

    // 4. Get previously saved workouts
    const workouts = await loadWorkouts();

    // 5. Prevent duplicate workout IDs
    const workoutExists = workouts.some(
      (item) => item.id === workout.id
    );

    if (workoutExists) {
      throw new Error('Workout ID already exists.');
    }

    // 6. Add the new workout to the existing list
    const updatedWorkouts = [...workouts, workout];

    // 7. Save the updated list
    await saveWorkouts(updatedWorkouts);

    // 8. Return the updated list
    return updatedWorkouts;
  } catch (error) {
    console.error('Error adding workout:', error);
    throw error;
  }
};


 // Update an existing workout record
export const updateWorkout = async (workoutId, updatedData) => {
  try {
    // 1. Get all existing workout records
    const workouts = await loadWorkouts();

    // 2. Find the workout and update its information
    const updatedWorkouts = workouts.map((workout) =>
      workout.id === workoutId
        ? { ...workout, ...updatedData }
        : workout
    );

    // 3. Check if the workout exists
    const workoutExists = workouts.some(
      (workout) => workout.id === workoutId
    );

    if (!workoutExists) {
      throw new Error('Workout not found.');
    }

    // 4. Save the updated workout collection
    await saveWorkouts(updatedWorkouts);

    // 5. Return the updated collection
    return updatedWorkouts;
  } catch (error) {
    console.error('Error updating workout:', error);
    throw error;
  }
};

 // Delete one workout record using its ID
export const deleteWorkout = async (workoutId) => {
  try {
    // 1. Get all existing workout records
    const workouts = await loadWorkouts();

    // 2. Check if the workout exists
    const workoutExists = workouts.some(
      (workout) => workout.id === workoutId
    );

    if (!workoutExists) {
      throw new Error('Workout not found.');
    }

    // 3. Remove the selected workout
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== workoutId
    );

    // 4. Save the remaining workout records
    await saveWorkouts(updatedWorkouts);

    // 5. Return the updated collection
    return updatedWorkouts;
  } catch (error) {
    console.error('Error deleting workout:', error);
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