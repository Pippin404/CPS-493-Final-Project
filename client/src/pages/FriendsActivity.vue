<script setup lang="ts">
import ActivityList from '@/components/ActivityList.vue';
import AddActivity from '@/components/AddActivity.vue';
</script>

<template>
    <div class="center"></div>
        <div class="columns is-centered">
            <div class="column is-two-thirds">
                <h1 class="title">Friends activity</h1>
                <AddActivity></AddActivity>


                

                <ActivityList></ActivityList>
            </div>
        </div>
</template>
<style scoped>
</style>
