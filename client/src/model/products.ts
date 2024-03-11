import data from "../data/products.json"
import { ref } from 'vue';

export interface Root {
    email: string   
    place: string
    distance: number
    duration: number
    date: string
    image: string
    type: string
  }

export function getitems(): Root[] {
    return data.items;
  }