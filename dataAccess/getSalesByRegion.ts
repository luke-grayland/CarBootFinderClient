import axios from 'axios';
import {SaleModel} from "../models/saleModel";

export const GetSalesByRegion = async (region: string, pageNumber: number) : Promise<SaleModel[]> => {
    try {
        const response = await axios.get(`/sales/region/${region}`, {
            baseURL: process.env.SalesApiBaseUrl,
            params: {
                pageNumber: pageNumber 
            },
        })
        return response.data as SaleModel[]
    } catch (error) {
        // @ts-ignore
        console.error('Request failed:', error.message)
        throw error
    }
}