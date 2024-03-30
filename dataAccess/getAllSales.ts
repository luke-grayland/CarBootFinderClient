import axios from 'axios'
import {SaleModel} from "../models/saleModel";

export const GetAllSales = async (pageNumber: number): Promise<SaleModel[]> => {
    try {
        const response = await axios.get('/sales', {
            baseURL: process.env.SalesApiBaseUrl,
            params: {
                pageNumber: pageNumber,
            },
        })
        return response.data as SaleModel[]
    } catch (error) {
        // @ts-ignore
        console.error('Request failed:', error.message)
        throw error
    }
}