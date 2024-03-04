<script 
    setup lang="ts">
    let isCollapsed = (true);
</script>

<template>
    <div>
        <h1>Friends activity</h1>
    </div>



    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Documentation Card
            </p>
            <a class="card-header-icon" aria-label="delete" @click="isCollapsed = !isCollapsed">
                <span class="icon">
                    <i class="fas fa-angle-down" :class="{'is-active': !isCollapsed}"></i>
                </span>
            </a>
        </header>
        <div class="card-content" v-show="!isCollapsed">
            <div class="content">
                <!-- Add your documentation content here -->
                <p>Documentation content</p>


            </div>
        </div>
    </div>




</template>

<style scoped>

</style>