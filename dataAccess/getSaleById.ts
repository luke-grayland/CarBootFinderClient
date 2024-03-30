import axios from 'axios'
import {SaleModel} from "../models/saleModel";

export const GetSaleById = async (saleId: string): Promise<SaleModel> => {
    try {
        const response = await axios.get(`/sales/${saleId}`, {
            baseURL: process.env.SalesApiBaseUrl,
        })
        return response.data as SaleModel
    } catch (error) {
        // @ts-ignore
        console.error('Request failed:', error.message)
        throw error
    }
}