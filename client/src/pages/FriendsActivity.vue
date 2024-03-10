<script 
    setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';
    let isCollapsed = ref(false);
</script>

<template>
    <div>
        <h1>Friends activity</h1>
    </div>


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






    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Documentation Card
            </p>
            <a class="card-header-icon" aria-label="delete" @click="isCollapsed = !isCollapsed">
                <span class="icon">
                    <i class="fas fa-angle-down" :class="{'is-active': !isCollapsed} "></i>
                </span>
            </a>
        </header>
        <div class="card-content " v-show="!isCollapsed ">
            <div class="content">
                <!-- Add your documentation content here -->
                <p>Documentation content</p>


            </div>
        </div>
    </div>




</template>

<style scoped>

</style>