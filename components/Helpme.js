import { useNavigation } from "@react-navigation/native"
import { View, Text,TextInput, TouchableOpacity} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import {Checkbox} from "expo-checkbox"


const Helpme = () =>{
    const Navigator= useNavigation()
    const [IsPasswordShown, setIsPasswordShown] = useState(false);
    const [IsChecked, setIsChecked] = useState(false);

     
    return(
        <View>
           <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 18, marginVertical: 8, marginRight: 10}}>Full name</Text>
                <View style={{ height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22}}>
                    <TextInput placeholder="Your name" placeholderTextColor={'black'} keyboardType="default" style={{width: 230}}>
                    </TextInput>
                </View>
            </View>
            <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 18, marginVertical: 8, marginRight:10}}>Phone Number</Text>
                <View style={{height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22}}>
                    <TextInput placeholder="Your number" placeholderTextColor={'black'} keyboardType="numeric" style={{width: 230}}>
                    </TextInput>
            </View>
            </View>
            <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 18, marginVertical: 8, marginRight: 10}}>Password</Text>
                <View style={{height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22}}>
                    <TextInput placeholder="Password" placeholderTextColor={'black'} keyboardType="numeric" style={{width: 230}} />
                    <TouchableOpacity style={{position: 'absolute', right: 12}} onPress={()=>setIsPasswordShown(!IsPasswordShown)}>
                      {  IsPasswordShown == true ? (
                            <Ionicons name='eye-off' size={24} color='black' />
                        ):(
                            <Ionicons name='eye' size={24} color='black' />
                        )}
                    </TouchableOpacity>
            </View>
            </View>
            <View style={{marginVertical: 22}}>
            <Text style={{fontSize: 18, marginVertical: 8, marginRight: 10}}>Confirm Password </Text>
                <View style={{ height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22}}>
                    <TextInput placeholder="Confirm Password" placeholderTextColor={'black'} keyboardType="numeric" style={{width: 230}} />
                    <TouchableOpacity style={{position: 'absolute', right: 12}} onPress={()=>setIsPasswordShown(!IsPasswordShown)}>
                      {  IsPasswordShown == true ? (
                            <Ionicons name='eye-off' size={24} color='black' />
                        ):(
                            <Ionicons name='eye' size={24} color='black' />
                        )}
                    </TouchableOpacity>
            </View>
            </View>
             <View style={{flexDirection: 'row', marginVertical: 6}}>
                <Checkbox style={{marginRight: 8}}
                value={IsChecked}
                onValueChange={setIsChecked}
                color={IsChecked ? 'red' : undefined} />
                <Text>If you are creating a new account, Terms & Conditions and Privacy Policy will apply</Text>
            </View> 
 </View>

    )
}
 
export default Helpme;

     