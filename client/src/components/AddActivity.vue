<script setup lang="ts">
    import { RouterLink } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { type ActivityData, getActivity } from "@/model/products";
import { getUsers, type UserRoot } from '@/model/users';
import ActivityList from '@/components/ActivityList.vue';

const isCollapsed = ref(false);
const showPopup = ref(false);
const newActivity = ref<ActivityData | null>(null);
//declaring the data arrays
const products = ref([] as ActivityData[]);
const users = ref([] as UserRoot[]);

function removeCard(product: ActivityData) {
    products.value = products.value.filter(p => p !== product);
}

onMounted(async () => {
    products.value = await getActivity();
});

onMounted(async () => {
    users.value = await getUsers();
});

function isMatchingEmail(userEmail: string, productEmail: string): boolean {
  return userEmail === productEmail;
}

function addActivity() {
    newActivity.value = {
        email: '',
        place: '',
        distance: 0,
        duration: 0,
        date: '',
        type: '',
        image: '',
    }
}

function saveActivity(){

    if (newActivity.value) {
        products.value.unshift(newActivity.value);
        newActivity.value = null;
    }


}
</script>

<template>

     <button class="button is-medium is-fullwidth is-primary" @click="addActivity">Add Activity</button>
        
        <div v-if="newActivity" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Add Activity</p>
                    <button class="delete" aria-label="close" @click="newActivity=null"></button>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="saveActivity">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Enter your email" v-model="newActivity.email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Place</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter the place" v-model="newActivity.place">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Distance</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter the distance" v-model="newActivity.distance">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Duration</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter the duration" v-model="newActivity.duration">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Date</label>
                            <div class="control">
                                <input class="input" type="date" placeholder="Enter the date" v-model="newActivity.date">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Type</label>
                            <div class="control">
                                <input class="input" type="type" placeholder="What kind?" v-model="newActivity.type">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Image</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter the image URL" v-model="newActivity.image">
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
</template>

<style scoped>

</style>