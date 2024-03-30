import {Button} from "react-native";
import {Link} from "expo-router";

const ProfileButton = () => {
    return(
        <Link href="/profile" asChild>
            <Button title="My Profile"></Button>
        </Link>
    )
}

export default ProfileButton