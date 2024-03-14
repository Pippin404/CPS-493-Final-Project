import { ref } from "vue";


const currentUser = ref('')
export function setCurrentUser(user: string) {
    currentUser.value = user
}
export function getCurrentUser() {
    return currentUser.value
}