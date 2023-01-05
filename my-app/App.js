
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import Home from './screens/home/home.jsx';
import Signup from './screens/signup/signup';
import Login from './screens/login/login.jsx';
import Forgotpassword from './screens/login/forgotpassword.jsx';
import Sprofile from './screens/sprofile/sprofile';
import Shop from './screens/shop/Shop';
import OneShop from './screens/shop/OneShop';
import Cart from './screens/cart/cart';
import Pricelist from './screens/pricelist/pricelist.jsx';
import Uprofile from './screens/UserProfile/Uprofile.js';





const Stack = createNativeStackNavigator();

const App =() => {
  return (
    
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name ='Login'  component={Login}/>
<Stack.Screen name ='Signup'  component={Signup}/>
<Stack.Screen name ='Forgotpassword'    component={Forgotpassword}/>
<Stack.Screen name ='Home' options = {{headerShown :false}}  component={Home}/> 
<Stack.Screen name ="Shop" options = {{headerShown :false}} component={Shop} />
<Stack.Screen name ="OneShop" options = {{headerShown :false}} component={OneShop} />
<Stack.Screen name ="Cart" options = {{headerShown :false}} component={Cart} />
<Stack.Screen name ='Sprofile' options = {{headerShown :false}}  component={Sprofile}/> 
<Stack.Screen name ='Uprofile' options = {{headerShown :false}}  component={Uprofile}/> 
<Stack.Screen name ='Pricelist' options = {{headerShown :false}}  component={Pricelist}/>
</Stack.Navigator>
</NavigationContainer>
   
);
}


export default App;