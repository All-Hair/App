
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/home/home';
import Signup from './screens/signup/signup';
import Login from './screens/login/login.jsx';
import Forgotpassword from './screens/login/forgotpassword.jsx';


//app....

import Sprofile from './screens/sprofile/sprofile';
import Uprofile from './screens/UserProfile/Uprofile';
import Navbar from './components/Navbar';
import Shop from './screens/shop/Shop';
import OneShop from './screens/shop/OneShop';
import cart from './screens/cart/cart';
import UpdateUpro from './screens/UserProfile/UpdateUpro';




const Stack = createNativeStackNavigator();

const App =() => {
  return (
    
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name ='Login' options = {{headerShown :false}} component={Login}/>
<Stack.Screen name ='Signup'    component={Signup}/>
<Stack.Screen name ='Forgotpassword'    component={Forgotpassword}/>
<Stack.Screen name ='Home' options = {{headerShown :false}}  component={Home}/> 
<Stack.Screen name ="shop" component={Shop} />
<Stack.Screen name ="oneShop" component={OneShop} />
<Stack.Screen name ="cart" component={cart} />

{/* <Stack.Screen name ='Navbar'   component={Navbar}/>  */}

<Stack.Screen name ='Sprofile' options = {{headerShown :false}}  component={Sprofile}/> 
<Stack.Screen name ='Uprofile' options = {{headerShown :false}}  component={Uprofile}/> 
<Stack.Screen name ='UpdateUpro' options = {{headerShown :false}}  component={UpdateUpro}/> 





</Stack.Navigator>
</NavigationContainer>
   
    
  );
}


export default App;