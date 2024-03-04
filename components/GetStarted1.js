import { Text, View, Image, Button, TouchableOpacity, TextInput, Alert, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { React } from 'react-native';
import { useState, useEffect } from "react";
import Helpme from "./Helpme";
import EmailForm from "./EmailForm";

const GetStarted1 = () => {
    const [IsPasswordShown, setIsPasswordShown] = useState(false)
    const Navigator = useNavigation()
    const [toggle, setToggle] = useState('email');

    // useEffect(()=>{
    //         Alert.alert(`Toggle has been changed to ${toggle}`)
    //     }, [toggle])
    // const handleToggle = (next) => {
    //     setToggle(next);
    // };
    return (
        <View style={{ backgroundColor: '#EC1C23', height: '100%' }}>
            <Image source={require('../assets/Love-logo.png')} style={{ width: 100, height: 100, marginTop: 15 }} />
            <View style={{ backgroundColor: 'white', borderTopRightRadius: 25, borderTopLeftRadius: 25, width: '100%', height: '90%', padding: 30 }}>
                <View style={{}}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Get started</Text>
                    <Text style={{ color: 'black', fontSize: 20, marginTop: Spacing = 5 }}>Sign up today and start placing your order</Text>
                </View>
                <View style={{ paddingHorizontal: 16, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: toggle == 'phone' ? 'red' : 'white', width: 230, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#EC1C23' }} onPress={() => setToggle('phone')}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18, }}>Phone Number</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: toggle == 'email' ? 'red' : 'white', width: 230, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderColor: '#EC1C23', height: 50, borderWidth: 2, alignItems: 'center', justifyContent: 'center' }} onPress={() => setToggle('email')}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18, }}>Email Address</Text>
                    </TouchableOpacity>
                </View>
                {toggle == 'email' ? (
                    <EmailForm />
                ) : (
                    <Helpme />
                )}
                <View style={{ marginBottom: 30, justifyContent: 'center', alignItems: 'center' }}>
                    {/* Get Started */}
                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: 'red', padding: 24, width: 450 }} onPress={() => Navigator.navigate('OTPverification')}>
                        <Text style={{ fontSize: 19, fontWeight: '600', color: 'white', textAlign: 'center', }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 30, justifyContent: 'center', alignItems: 'center', flexDirection:"row" }}>
                <Text>Have an account </Text>
                    <TouchableOpacity>
                        <Text style={{color:'red'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
export default GetStarted1;


