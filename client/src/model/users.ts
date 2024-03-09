import data from "../data/users.json"
import { ref } from 'vue';

export interface Root {
    firstName: string
    lastName: string
    email: string   
    admin: boolean

  }

export function getitems(): Root[] {
    return data.items;
  }