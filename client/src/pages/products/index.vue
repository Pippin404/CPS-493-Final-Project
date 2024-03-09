<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { type Root, getitems } from "@/model/users";
    const products = ref([] as Root[]);

    onMounted(async () => {
        products.value = await getitems();
    });
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




    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.email">
                <td>{{ product.firstName }}</td>
                <td>{{ product.lastName }}</td>
                <td>{{ product.email }}</td>
                <td>{{ product.admin }}</td>
                <td>                    </td>
            </tr>
        </tbody>
    </table>




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