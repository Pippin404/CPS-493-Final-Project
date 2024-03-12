<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { type ActivityData, getActivity } from "@/model/products";
import { getUsers, type UserRoot } from '@/model/users';

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
      
    <div class="center"></div>
        <div class="columns is-centered">
            <div class="column is-two-thirds">
                <h1 class="title">Friends activity</h1>

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
      





        <div class="product-list">
            <div v-for="product in products" :key="product.email" class="card">
                <div class="card-image">
                    <div class="card-content">
                        <button class="delete" @click="removeCard(product)">Delete</button>

                        <!--Display a persons info-->
                        <div class="user-list">
                        <div v-for="user in users" :key="user.email" class="card">

                            <p class="userInfo" v-if="isMatchingEmail(user.email, product.email)">
                                {{ user.firstName }}
                                <img :src="user.image" class="userImage" alt="Product image" v-if="isMatchingEmail(user.email, product.email)">
                            </p>
                            <p class="userInfo" v-if="isMatchingEmail(user.email, product.email)">
                                {{  }}
                            </p>
                            
                        </div>  
                    </div>

                    <!--Other Card Content-->
                    <h3 class="subtitle is-6"> At {{ product.date }}</h3>
                    <br>
                    <img :src="product.image" alt="Product image" class="small">
                    <p class="subtitles">{{ product.type }} thru {{ product.place }}</p>
                    <p class="subtitles"> Distance: {{ product.distance }} Meters in {{ product.duration }} Minutes</p>
                    <p class="subtitles"> Date: {{ product.date }}</p>  
                    <div class="hoverable-icons">
                        <i class="fas fa-reply"></i>
                        <i class="fas fa-retweet"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>





        </div>
    </div>
</template>
<style scoped>

    .small{
        width: 30%;
        margin: 30px;
        float: right;
    }
    .userName{
        font-weight: bold;
        color:black;
        font-size: 30px;
        
    }
    .card{
        margin-top: 20px;
    }

    .subtitles{
        font-size: 20px;
        color:black;
        margin: 10px;
    }
    .delete {
        margin-left: auto;
    }
    
    .hoverable-icons{
        margin: 5px;
    }
    .fas{
        margin: 5px;
        cursor: pointer;
        color: #00d1b2;
    }

    .userInfo{
        font-size: 30px;
        color:black;
        margin: 10px;
    }

    .userImage{

        height: 40px;

    }
</style>
