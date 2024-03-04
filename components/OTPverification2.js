import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity } from "react-native";


const OTPverification2 = () => {
    const Navigator = useNavigation()
    return (
        <View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <View>
                <Image source={require('../assets/male-emoji.png')} style={{ width: 180, height: 190,  }} />
            </View>
            <View>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', marginTop: 20 }}>You Are doing well</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 17, color:'black',paddingHorizontal: 40}}>
                Congratulations! Your account has been sucessfully created. You are
                now ready to embark delicious journey with foodie delight </Text>
            </View>
            <View style={{ marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: 'red', padding: 24, width: 450 }} onPress={() => Navigator.navigate('LoginPhone')}>
                        <Text style={{ fontSize: 19, fontWeight: '600', color: 'white', textAlign: 'center', }}>Add Address</Text>
                    </TouchableOpacity>
                </View>
        </View>

    )
}
export default OTPverification2;
