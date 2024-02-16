import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LocationPermit = () => {
    const Navigator = useNavigation()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Text style={{ marginTop: 80 }}>Explore resturant nearby</Text>
            <Image source={require('../assets/Location.png')} style={{ marginTop: 470, width: 150, height: 150 }} />
            <Text style={{ marginTop: 20 }}>By granting permission you can search for resturants</Text>
            <Text>around you and receive more accurate delivery </Text>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={{ borderRadius: 16, backgroundColor: 'red', padding: 24, width: 312, }} onPress={()=>Navigator.navigate('Onboarding 1')}>
                    <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', }}>Create Permission</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}
export default LocationPermit;