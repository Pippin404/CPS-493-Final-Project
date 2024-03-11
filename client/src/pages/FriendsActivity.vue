<script setup lang="ts">
let isCollapsed = ref(false);
let showPopup = ref(false);

import { RouterLink } from 'vue-router';
//Import time baby
import { ref, computed, onMounted } from 'vue';
    import { type Root, getitems } from "@/model/products";
    const products = ref([] as Root[]);

    onMounted(async () => {
        products.value = await getitems();
    });

    function removeCard(product: Root) {
        products.value = products.value.filter(p => p !== product);
    }

</script>

<template>
      
    <div class="center"></div>
        <div class="columns is-centered">
            <div class="column is-two-thirds">
                <h1 class="title">Friends activity</h1>
       
    


            <button class="button is-medium is-fullwidth is-primary" @click="showPopup = true">Add Activity</button>

            <div v-if="showPopup" class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Add Activity</p>
                        <button class="delete" aria-label="close" @click="showPopup = false"></button>
                    </header>
                    <section class="modal-card-body">
                        <form>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="Enter your email">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Place</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter the place">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Distance</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter the distance">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Duration</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter the duration">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Date</label>
                                <div class="control">
                                    <input class="input" type="date" placeholder="Enter the date">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Type</label>
                                <div class="control">
                                    <input class="input" type="type" placeholder="What kind?">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Image</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter the image URL">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <button class="button is-primary">Submit</button>
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

                            <!--This should be a persons name!-->
                            <h3 class="userName"> {{ product.email }}</h3>
                            <h3 class="subtitle is-6"> At {{ product.date }}</h3>
                            <br>

                            <p class="subtitles">{{ product.type }} thru {{ product.place }}</p>
                            <p class="subtitles"> Distance: {{ product.distance }}</p>
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
    .userName{
        font-weight: bold;
        color:black;
        font-size: 20px;
    }
    .card{
        margin-top: 20px;
    }

    .subtitles{
        font-size: 15px;
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
</style>
