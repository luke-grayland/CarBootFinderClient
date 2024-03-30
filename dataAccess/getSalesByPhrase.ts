import axios from 'axios';
import {SaleModel} from "../models/saleModel";

export const GetSalesByPhrase = async (phrase: string, pageNumber: number) : Promise<SaleModel[]> => {
    try {
        const response = await axios.get(`/sales/phrase/${phrase}`, {
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