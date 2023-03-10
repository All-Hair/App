import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import * as React from "react";
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs()
import Home from "./screens/home/home.jsx";
import Signup from "./screens/signup/signup";
import Login from "./screens/login/login.jsx";
import Forgotpassword from "./screens/login/forgotpassword.jsx";
import Sprofile from "./screens/sprofile/sprofile";
import Cart from "./screens/cart/cart";
import Pricelist from "./screens/pricelist/Pricelist.jsx";
import Uprofile from "./screens/UserProfile/Uprofile.js";
import BookList from "./screens/booking/bookList.js";
import UpdateUpro from "./screens/UserProfile/UpdateUpro";
import Mainbutton from "./screens/mainbutton/mainbutton.jsx";
import DateSelect from "./screens/booking/dateSelect.js";
import PickTime from "./screens/booking/pickTime.js";
import Appointment from "./screens/booking/appointment.js";
import Location from "./screens/location/location.js";
import MyCart from "./screens/cart/MyCart.js";
import ProductInfo from "./screens/cart/ProductInfo.js";
import Detail from "./screens/home/Detail.jsx";
import Videos from "./screens/videoss/videos.jsx";
import AddPost from "./screens/sprofile/AddPost.jsx";
import PhotoDetails from "./screens/sprofile/PhotoDetails.jsx";
import UpdateProfile from "./screens/sprofiles/UpdateProfile.js";
import Sprofiles from "./screens/sprofiles/sprofiles";
import Pick from "./screens/pick image/pick.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={Signup}
          />
          <Stack.Screen
            name="Forgotpassword"
            options={{ headerShown: false }}
            component={Forgotpassword}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="Cart"
            options={{ headerShown: false }}
            component={Cart}
          />
          <Stack.Screen
            name="Sprofile"
            options={{ headerShown: false }}
            component={Sprofile}
          />
          <Stack.Screen
            name="Uprofile"
            options={{ headerShown: false }}
            component={Uprofile}
          />
          <Stack.Screen
            name="UpdateUpro"
            options={{ headerShown: false }}
            component={UpdateUpro}
          />
          <Stack.Screen
            name="Pricelist"
            options={{ headerShown: false }}
            component={Pricelist}
          />
          <Stack.Screen
            name="DateSelect"
            component={DateSelect}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PickTime"
            component={PickTime}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mainbutton"
            options={{ headerShown: false }}
            component={Mainbutton}
          />
          <Stack.Screen
            name="BookList"
            options={{ headerShown: false }}
            component={BookList}
          />
          <Stack.Screen
            name="Appointment"
            options={{ headerShown: false }}
            component={Appointment}
          />
          <Stack.Screen
            name="MyCart"
            options={{ headerShown: false }}
            component={MyCart}
          />
          <Stack.Screen
            name="ProductInfo"
            options={{ headerShown: false }}
            component={ProductInfo}
          />
          <Stack.Screen
            name="Detail"
            options={{ headerShown: false }}
            component={Detail}
          />
           <Stack.Screen
            name="Location"
            options={{ headerShown: false }}
            component={Location}
          />
          <Stack.Screen
            name="Videos"
            options={{ headerShown: false }}
            component={Videos}
          />
           <Stack.Screen
            name="addPost"
            options={{ headerShown: false }}
            component={AddPost}
          />
           <Stack.Screen
            name="photoDetails"
            options={{ headerShown: false }}
            component={PhotoDetails}
          />
           <Stack.Screen
            name="UpdateProfile"
            options={{ headerShown: false }}
            component={UpdateProfile}
          />
          <Stack.Screen
            name="Sprofiles"
            options={{ headerShown: false }}
            component={Sprofiles}
          />
           <Stack.Screen
            name="Pick"
            options={{ headerShown: false }}
            component={Pick}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
