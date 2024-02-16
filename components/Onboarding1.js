import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding1 = () =>{
    const Navigator = useNavigation()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
             <View>
                <TouchableOpacity>
                    <Text style={{left:173, marginTop: 100, fontSize: 18}}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/delivery-bike.png')} style={{marginTop: 200, width: 250, height:250}} />
             <Text style={{ marginTop: 200, fontSize: 20, fontWeight: 'bold', color: 'black', textAlign:'center',  }}>Quench your craving</Text>
             <Text>Find your favourite meal from your favourite</Text>
             <Text>resturants and we will deliver it to your door</Text>
             <Text>step</Text>
             <View style={{ marginTop: 40 }}>
                <TouchableOpacity style={{ borderRadius: 16, backgroundColor: 'red', padding: 24, width: 312, }} onPress={()=>Navigator.navigate('Onboarding 2')}>
                    <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding1;