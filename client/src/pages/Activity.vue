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
  <section class="hero" v-if="getCurrentUser() ==''" style="background-color: aliceblue;">
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

  <section class="hero" v-if="getCurrentUser() !==''" style="background-color: aliceblue;">
    <div class="hero-body">
      <p class="title">
        Here is your Activity!
      </p>

      <div v-for="activity in Activities" :key="activity.email" class="card">
          <div v-if="activity.email == getCurrentUser()">
            <div class="card-content">
            <h4 class="subtitle is-4">{{ activity.email }}</h4>
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
    .small{
        width: 30%;
        margin: 30px;
        float: right;
    }
    .userName{
        font-weight: bold;
        color:black;
        font-size: 30px;
        
    }
    .card{
        margin-top: 20px;
    }

    .subtitles{
        font-size: 20px;
        color:black;
        margin: 10px;
    }
    .delete {
        margin-left: auto;
    }
    
    .hoverable-icons{
        margin: 5px;
    }
    .fas{
        margin: 5px;
        cursor: pointer;
        color: #00d1b2;
    }

    .userInfo{
        font-size: 30px;
        color:black;
        margin: 10px;
    }

    .userImage{

        height: 40px;

    }

    .h1{
      font-size: 50px;
        color:black;
        margin: 10px;
    }
</style>