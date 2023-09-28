import axios from "axios"
import { curencyApi } from "./base.service"

export interface ICurency {
    quotes: {
        USDRUB: number,
        USDEUR: number,
        USDBTC: number,
    }
}

export const CurencyService = {
    async getCurency() {
        const { data } = await curencyApi.get<ICurency>(`/live?access_key=${process.env.CURENCY_TOKEN}&currencies=RUB,EUR,BTC&source=USD&format=1`)
        return Object.values(data.quotes)
    }
}