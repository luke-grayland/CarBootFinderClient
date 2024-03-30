import {Text, View} from 'react-native'
import ProfileButton from "../components/buttons/profileButton";
import Profile from "./profile";

const Home = () => {
    return(
        <View>
            <Text>Home screen</Text>
            <ProfileButton/>
        </View>
    )
}

export default Home