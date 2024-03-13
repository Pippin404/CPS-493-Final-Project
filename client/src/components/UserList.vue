<script setup lang="ts">
     import { ref, computed, onMounted } from 'vue';
    import { type UserRoot, getUsers } from "@/model/users";
    const products = ref([] as UserRoot[]);

    onMounted(async () => {
        products.value = await getUsers();
    });

    const deleteProduct = (product: UserRoot) => {
        const index = products.value.findIndex(p => p.email === product.email);
        if (index !== -1) {
            products.value.splice(index, 1);
        }
    };
</script>

<template>
    <div>

        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.email">
                <td><img :src="product.image" alt="Product image" class="small"></td>
                <td>{{ product.firstName }}</td>
                <td>{{ product.lastName }}</td>
                <td>{{ product.email }}</td>
                <td>{{ product.admin }}</td>
                <td>                   
                    <button class="button is-primary fas fa-edit"></button>
                    <button class="button is-danger fas fa-trash" @click="deleteProduct(product)"></button>
                </td>
            </tr>
        </tbody>
    </table>


    </div>
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

    .table {
        margin: 0 auto;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 90%; 
        max-width: 1200px; 
    }

    .tr{
        margin: 50px;
    }

    .small{
        width: 50px;
        height: 50px;
    }
</style>