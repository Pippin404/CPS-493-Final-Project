import data from "../data/users.json"
import { ref } from 'vue';

export interface UserRoot {
    firstName: string
    lastName: string
    email: string   
    admin: boolean 
    image: string
  }

export function getUsers(): UserRoot[] {
    return data.items;
  }