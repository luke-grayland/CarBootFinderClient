import {Button, Text, View} from 'react-native'
import ProfileButton from "../components/buttons/profileButton";

const Home = () => {
    const handleLogIn = async () => {
        
    }
    
    return(
        <View>
            <Text>Home screen</Text>
            <ProfileButton/>
            <Button title="Log in" onPress={handleLogIn}/>
        </View>
    )
}

export default Home