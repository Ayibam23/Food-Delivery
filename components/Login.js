import { View, Text, Button, TouchableOpacity } from "react-native";

const Login = () =>{
    return(
        <View style = {{marginTop: 750, justifyContent: 'center', alignItems:'center'}}>
        {/* Get Started */}
        <TouchableOpacity style={{borderRadius:16, backgroundColor: '#EC1C23', padding: 24, width: 312,}}>
          <Text style={{fontSize: 18, color: 'white', textAlign:'center', }}>Get Started</Text>
        </TouchableOpacity>
        {/* Login */}
        <TouchableOpacity style={{borderRadius:16, backgroundColor: 'white', padding: 24, width: 312, borderWidth: 2, borderColor: 'black', marginTop: 20}}>
          <Text style ={{fontSize:17, color: 'black', textAlign:'center',}}>Login</Text>
        </TouchableOpacity>
    
      </View>
    )
}
export default Login;