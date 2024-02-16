
import Duolingo from "./components/Duolingo";
import LocationPermit from "./components/LocationPermit";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2"
import Login from "./components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


const App = () =>{
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Duolingo' component={Duolingo} options={{headerShown: false}} />
      <Stack.Screen name="Location Permit" component={LocationPermit} options={{headerShown: false}}/> 
      <Stack.Screen name="Onboarding 1" component={Onboarding1} options={{headerShown: false}}/>
      <Stack.Screen name="Onboarding 2" component={Onboarding2} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;