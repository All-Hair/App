import AsyncStorage from '@react-native-async-storage/async-storage';


const localStorage = {

   localStoreData :  async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }
,
  
localGetData : async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user')
    const jsonparseValue = JSON.parse(jsonValue) 
    // setUser(jsonparseValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

  
}
  export default localStorage 