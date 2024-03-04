
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OTPverification = () => {
    const Navigator = useNavigation()
    return (
        <View style={{ padding: 25, alignItems: 'center' }}>
            <TouchableOpacity style={{alignSelf: 'flex-start'}}onPress={Navigator.goBack}>
                <Ionicons name="arrow-back-outline" size={24} color={'black'} marginTop={15} />
            </TouchableOpacity>
            <Text style={{ alignSelf: 'flex-start', fontWeight: 500, fontSize: 50, color: 'black' }}>OTP Verification</Text>

            <View style={{alignSelf:'flex-start'}}>
                <Text style={{ fontSize: 20, alignSelf: 'flex-start' }}>Thank you for signing up, Enter the 4-digit that we</Text>
                <Text style={{ fontSize: 20, alignSelf: 'flex-start' }}>have sent via the phone number +234 728-1047-820</Text>
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 60, marginTop: 40 }}>
                <TextInput placeholder="." placeholderTextColor={'red'} keyboardType="numeric" style={{ width: 55, height: 55, borderWidth: 2, borderColor: 'D1D1D1', textAlign: 'center', borderRadius: 12 }} />
                <TextInput placeholder="." placeholderTextColor={'red'} keyboardType="numeric" style={{ width: 55, height: 55, borderWidth: 2, borderColor: 'D1D1D1', textAlign: 'center', borderRadius: 12 }} />
                <TextInput placeholder="." placeholderTextColor={'red'} keyboardType="numeric" style={{ width: 55, height: 55, borderWidth: 2, borderColor: 'D1D1D1', textAlign: 'center', borderRadius: 12 }} />
                <TextInput placeholder="." placeholderTextColor={'red'} keyboardType="numeric" style={{ width: 55, height: 55, borderWidth: 2, borderColor: 'D1D1D1', textAlign: 'center', borderRadius: 12 }} />
            </View>
            <View style={{alignContent: 'center', justifyContent: 'center', marginTop: 40 }}>
                <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 500, color: 'black' }}>00:30</Text>
            </View>
            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: 'red', padding: 24, width: 450 }} onPress={() => Navigator.navigate('OTPverification2')}>
                        <Text style={{ fontSize: 19, fontWeight: '600', color: 'white', textAlign: 'center', }}>Verify your account</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', flexDirection:"row" }}>
                <Text>Didn't receive a code?</Text>
                    <TouchableOpacity>
                        <Text style={{color:'red'}}>Resend code</Text>
                    </TouchableOpacity>
                </View>
         </View>
    );
};

export default OTPverification;
