import data from "../data/products.json"
import { ref } from 'vue';

export interface ActivityData {
    email: string   
    place: string
    distance: number
    duration: number
    date: string
    image: string
    type: string
  }

export function getActivity(): ActivityData[] {
    return data.items;
  }