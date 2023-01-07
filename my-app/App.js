
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base';

import Home from './screens/home/home.jsx';
import Signup from './screens/signup/signup';
import Login from './screens/login/login.jsx';
import Forgotpassword from './screens/login/forgotpassword.jsx';
import Sprofile from './screens/sprofile/sprofile';
import Shop from './screens/shop/Shop';
import OneShop from './screens/shop/OneShop';
import Cart from './screens/cart/cart';
import Pricelist from './screens/pricelist/Pricelist.jsx';
import Uprofile from './screens/UserProfile/Uprofile.js';
import Appointment from './screens/rating/rating.jsx'
import UpdateUpro from './screens/UserProfile/UpdateUpro';
import Mainbutton from './screens/mainbutton/mainbutton.jsx';



const Stack = createNativeStackNavigator();

const App =() => {
  return (
    <NativeBaseProvider> 

<NavigationContainer>
<Stack.Navigator >
<Stack.Screen name ='Login' options = {{headerShown :false}} component={Login}/>
<Stack.Screen name ='Signup'  options = {{headerShown :false}}  component={Signup}/>
<Stack.Screen name ='Forgotpassword'  options = {{headerShown :false}}   component={Forgotpassword}/>
<Stack.Screen name ='Home' options = {{headerShown :false}}  component={Home}/> 
<Stack.Screen name ="Shop" options = {{headerShown :false}} component={Shop} />
<Stack.Screen name ="OneShop" options = {{headerShown :false}} component={OneShop} />
<Stack.Screen name ="Cart" options = {{headerShown :false}} component={Cart} />
<Stack.Screen name ='Sprofile' options = {{headerShown :false}}  component={Sprofile}/> 
<Stack.Screen name ='Uprofile' options = {{headerShown :false}}  component={Uprofile}/> 
<Stack.Screen name ='UpdateUpro' options = {{headerShown :false}}  component={UpdateUpro}/> 
<Stack.Screen name ='Pricelist' options = {{headerShown :false}}  component={Pricelist}/>
<Stack.Screen name ='Appointment' options = {{headerShown :false}}  component={Appointment}/>
<Stack.Screen name ='Mainbutton' options = {{headerShown :false}}  component={Mainbutton}/>
</Stack.Navigator>
</NavigationContainer>
   
    </NativeBaseProvider>
);
}


export default App;