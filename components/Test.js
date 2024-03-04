import { View } from "react-native";


const Test = () =>{
    return(
        <View style={{
            backgroundColor: 'blue',
            width: '80%',
            height: 450,
            borderRadius: 20,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'black',
            margin: 40,
            flexDirection: 'row',
            padding: 20,
            
        }}>
            {/* container 1 starts here */}
            <View style={{
                width: '50%', height: 200, backgroundColor: 'red'
            }}>

            </View>
            {/* Container 1 ends here */}
            {/* Container 1 */}
            <View style={{
                width: '50%', height: 200, backgroundColor: 'purple'
            }}>

            </View>

        </View>

    );
}
export default Test;