<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { type Root, getitems } from "@/model/users";
    const products = ref([] as Root[]);
</script>



<template>


      
    
    <!--IMPORTANT SHIT!!-->
    <div class="product-list">
                <div v-for="product in products" class="card">
        <div class="card-image">
                
                <div class="card-content">

                <h3>{{ product.firstName }}</h3>
                <h3>{{ product.lastName }}</h3>
                <h3>{{ product.email }}</h3>

                

            </div>
        </div>
    </div>
    </div>    

    
<p>this should display</p>



</template>

<style scoped>

    .card {

        flex-basis: 15rem;
        flex-grow: 1;
        margin: .5rem;

    }

    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }


</style>