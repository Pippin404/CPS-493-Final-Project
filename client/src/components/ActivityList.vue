<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { type ActivityData, getActivity } from "@/model/products";
import { getUsers, type UserRoot } from '@/model/users';


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
</script>

<template>
    <div>


        <div class="product-list">
            <div v-for="product in products" :key="product.email" class="card">
                <div class="card-image">
                    <div class="card-content">
                        <button class="delete" @click="removeCard(product)">Delete</button>

                        <!--Display a persons info-->
                        <div class="user-list">
                        <div v-for="user in users" :key="user.email" class="card">

                            <div class="userInfo" v-if="isMatchingEmail(user.email, product.email)">
                                <img :src="user.image" class="userImage" alt="Product image" v-if="isMatchingEmail(user.email, product.email)">
                                {{ user.firstName }}
                            </div>
                            <div class="userInfo" v-if="isMatchingEmail(user.email, product.email)">
                                {{  }}
                            </div>
                            
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