<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { getUsers, type UserRoot } from '@/model/users';


const isCollapsed = ref(false);
const showPopup = ref(false);

const users = ref([] as UserRoot[]);
const newUser = ref<UserRoot | null>(null);


onMounted(async () => {
    users.value = await getUsers();
});

function addUser() {
    newUser.value = {
        email: '',
        firstName: '',
        lastName: '',
        admin: false,
        image: '',
    }
}

function saveUser(){

    if (newUser.value) {
        users.value.unshift(newUser.value);
        newUser.value = null;
    }


}


</script>

<template>
    <div>

        <button class="button is-medium is-normal is-primary" @click="addUser">Add User</button>


        <div v-if="newUser" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Add Activity</p>
                    <button class="delete" aria-label="close" @click="newUser=null"></button>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="saveUser">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Enter your email" v-model="newUser.email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Place</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter First Name" v-model="newUser.firstName">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Distance</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter Last Name" v-model="newUser.lastName">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Duration</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="True if Admin" v-model="newUser.admin">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Date</label>
                            <div class="control">
                                <input class="input" type="date" placeholder="Profile Image" v-model="newUser.image">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="button is-primary" type="submit" value="Save">
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>


    </div>
</template>

<style scoped>
    .button{
        margin-left: 57px;
    }
</style>