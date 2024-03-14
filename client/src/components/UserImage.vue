<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { type UserRoot, getUsers } from "@/model/users";
    const products = ref([] as UserRoot[]);
    import { getCurrentUser } from '@/model/currentUser';

    onMounted(async () => {
        products.value = await getUsers();
    });
</script>



<template>
    <div>
        <div v-for="product in products" :key="product.email">
            <div v-if="getCurrentUser() === product.email">
                <img :src="product.image" alt="Product image" class="small">  
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>