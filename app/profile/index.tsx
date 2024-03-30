import {View, Text} from 'react-native'

interface ProfilePros {
    firstName: string,
    surname: string,
    age: number
}

const Profile = ({firstName, surname, age}: ProfilePros) => {
    
    firstName = 'Luke'
    surname = 'G'
    age = 27
    
    return(
        <View>
            <Text>Profile</Text>
            <Text>First name: {firstName}</Text>
            <Text>Surname: {surname}</Text>
            <Text>Age: {age}</Text>
        </View>
    )
}

export default Profile