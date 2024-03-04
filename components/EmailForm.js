import { useNavigation } from "@react-navigation/native"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import {Checkbox} from "expo-checkbox"
import { useState } from "react"

const EmailForm = () => {
    const Navigator= useNavigation()
    const [Password, setPassword] = useState();
    const [IsPasswordShown, setIsPasswordShown] = useState(false);
    const [IsChecked, setIsChecked] = useState(false);
    const togglePasswordShown = () => {
        setIsPasswordShown(!IsPasswordShown);
    }

    return (
        <View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 18, marginVertical: 8, marginRight: 10 }}>Full name</Text>
                <View style={{ height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22 }}>
                    <TextInput placeholder="Your name" placeholderTextColor={'black'} keyboardType="default" style={{ width: 230 }}>
                    </TextInput>
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 18, marginVertical: 8, marginRight: 10 }}>Email address</Text>
                <View style={{ height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22 }}>
                    <TextInput placeholder="Your Email" placeholderTextColor={'black'} keyboardType="default" style={{ width: 230 }}>
                    </TextInput>
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 18, marginVertical: 8, marginRight: 10 }}>Password</Text>
                <View style={{ height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22 }}>
                <TextInput secureTextEntry={!IsPasswordShown}
                    value={Password}
                    onValueChange={setPassword}
                    placeholder="Password" placeholderTextColor={'black'} keyboardType="numeric" style={{ width: 230, paddingVertical: 5 }} />
                    <TouchableOpacity style={{ position: 'absolute', right: 12, paddingVertical:5 }} onPress={() => togglePasswordShown}>
                        <Ionicons size={24}
                        name={IsPasswordShown ? 'eye' : 'eye-off'}
                        onPress={togglePasswordShown} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginVertical: 22 }}>
                <Text style={{ fontSize: 18, marginVertical: 8, marginRight: 10 }}>Confirm Password </Text>
                <View style={{ height: 43, borderColor: 'red', borderWidth: 1, borderRadius: 8, paddingLeft: 22 }}>
                    <TextInput secureTextEntry={!IsPasswordShown}
                    value={Password}
                    onValueChange={setPassword}
                    placeholder="Confirm Password" placeholderTextColor={'black'} keyboardType="numeric" style={{ width: 230, paddingVertical: 5 }} />
                    <TouchableOpacity style={{ position: 'absolute', right: 12, paddingVertical:5 }} onPress={() => togglePasswordShown}>
                        <Ionicons size={24}
                        name={IsPasswordShown ? 'eye' : 'eye-off'}
                        onPress={togglePasswordShown} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 6 }}>
                <Checkbox style={{ marginRight: 8 }}
                    value={IsChecked}
                    onValueChange={setIsChecked}
                    color={IsChecked ? 'red' : 'red'} />
                <Text>If you are creating a new account,</Text>  
                <TouchableOpacity style={{flexDirection:'row'}}> 
                    <Text style={{color:'red'}}>Terms & Conditions</Text> 
                </TouchableOpacity> 
                <Text> and</Text> 
                <TouchableOpacity>
                    <Text style={{color:'red'}}> Privacy Policy will apply</Text>
                </TouchableOpacity>     
            </View>
        </View>

    )
}

export default EmailForm;