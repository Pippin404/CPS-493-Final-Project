<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { type Root, getitems } from "@/model/users";
    const products = ref([] as Root[]);

    onMounted(async () => {
        products.value = await getitems();
    });
</script>

<template>

    
    

    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="#">My Exercise</a></li>
            <li><a href="#">Admin</a></li>
            <li class="is-active"><a href="#" aria-current="page">users</a></li>
        </ul>
    </nav>

    <button class="button is-primary">+Add User</button>


    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
                <td>                   
                    <button class="button is-primary fas fa-edit"></button>
                    <button class="button is-danger fas fa-trash"></button>
                
                </td>
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

    .table {
        margin: 0 auto;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 90%; /* Adjust the width as needed */
        max-width: 1200px; /* Set a maximum width if desired */
    }

    .tr{
        margin: 50px;
    }
</style>