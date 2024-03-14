<script setup lang="ts">
  import { getCurrentUser } from '@/model/currentUser';import { RouterLink } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { type ActivityData, getActivity } from "@/model/products";

const Activities = ref([] as ActivityData[]);

onMounted(async () => {
    Activities.value = await getActivity();
});

</script>

<template>

  <!--Only if no login-->
  <section class="hero" v-if="getCurrentUser() ==''">
    <div class="hero-body"></div>
      <div class="hero-body">
        <p class="title">
            Login
        </p>
        <p class="subtitle">
            In the meantime you can login using the login menu on the top right.
        </p>
      </div>
    </section>


    <section class="hero" v-if="getCurrentUser() !==''">
      <div class="hero-body">
        <p class="title">
          Here is your Activity!
        </p>
        

        <div v-for="activity in Activities" :key="activity.email" class="card">
          <div class="card-content">

            <div v-if="activity.email == getCurrentUser()">
              <h1>{{ activity.email }}</h1>
              <h3 class="subtitle is-6"> At {{ activity.date }}</h3>
              <br>
              <img :src="activity.image" alt="activity image" class="small">
              <p class="subtitles">{{ activity.type }} thru {{ activity.place }}</p>
              <p class="subtitles"> Distance: {{ activity.distance }} Meters in {{ activity.duration }} Minutes</p>
              <p class="subtitles"> Date: {{ activity.date }}</p>
          </div> 
          </div>
        </div>




        
      </div>
    </section>
</template>

<style scoped>
  
</style>