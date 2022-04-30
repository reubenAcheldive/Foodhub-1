import axios from "axios";
import { foodDb, } from "../data/foodDb"
import { IFoodDb } from "../interface/IFoodDb";
export function dishs(): IFoodDb[] {

    const data: IFoodDb[] = foodDb


    return data

}