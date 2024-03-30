import {Button, Text, View} from 'react-native'
import ProfileButton from "../components/buttons/profileButton";
import {GetAllSales} from "../dataAccess/getAllSales";
import {useState} from "react";
import {SaleModel} from "../models/saleModel";
import {GetSalesByLocation} from "../dataAccess/getSalesByLocation";
import {GetSaleById} from "../dataAccess/getSaleById";
import {GetSalesByPhrase} from "../dataAccess/getSalesByPhrase";
import {GetSalesByRegion} from "../dataAccess/getSalesByRegion";

const Home = () => {
    const [sales, setSales] = useState<SaleModel[]>()
    
    const handlePress = async () => {
        
    }
    
    return(
        <View>
            <Text>Home screen</Text>
            <ProfileButton/>
            <Button title="getAllSales" onPress={handlePress}/>
        </View>
    )
}

export default Home