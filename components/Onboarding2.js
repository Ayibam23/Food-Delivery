import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Onboarding2 =() =>{
    const Navigator = useNavigation()

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
           <View>
                <TouchableOpacity>
                    <Text style={{left:173, marginTop: 100, fontSize: 18}}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/sauce.png')} style={{marginTop: 200, width: 250, height:250}} />
             <Text style={{ marginTop: 150, fontSize: 20, fontWeight: 'bold', color: 'black', textAlign:'center',  }}>Discover new cuisines</Text>
             <Text>From local favourite to global delights, find the</Text>
             <Text>perfect dish for every taste</Text>
             
             <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={{ borderRadius: 16, backgroundColor: 'red', padding: 24, width: 312, }} onPress={()=>Navigator.navigate('Login')}>
                    <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Onboarding2;