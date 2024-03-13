<script setup lang="ts">
    import UserList from "@/components/UserList.vue";
    import AddUser from '@/components/AddUser.vue';
</script>

<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="#">My Exercise</a></li>
            <li><a href="#">Admin</a></li>
            <li class="is-active"><a href="#" aria-current="page">users</a></li>
        </ul>
    </nav>

    <AddUser></AddUser>

    <UserList>
    </UserList>
</template>



<style scoped>
    
</style>