import { ref } from "vue";
import { type UserRoot } from '@/model/users';

const currentUser = ref('')
export function setCurrentUser(user: string) {
    currentUser.value = user
}
export function getCurrentUser() {
    return currentUser.value
}


export function isAdmin(){

    const isAdmin = ref(false);
    const currentUser = ref(getCurrentUser());
    const users: UserRoot[] = []; // Assuming you have an array of UserRoot objects

    for (const user of users) {
        if (user.email === currentUser.value && user.admin === true) {
            isAdmin.value = true;
            break;
        }
    }
    return isAdmin;
}