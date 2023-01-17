// import AsyncStorage from '@react-native-async-storage/async-storage';

// const localStoreData = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value)
//       await AsyncStorage.setItem('@storage_Key', jsonValue)
//     } catch (e) {
//       // saving error
//       console.log(e);
//     }
//   }

  
// const localGetData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('@storage_Key')
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch(e) {
//       // error reading value
//     }
//   }
  
//   export default {localStoreData,localGetData}