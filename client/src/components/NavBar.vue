<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { setCurrentUser,getCurrentUser } from '@/model/currentUser';
import UserImage from './UserImage.vue';

const isActive = ref(false);
const UserProfile=ref('');
//Need a function to check UserProfile. UserProfile is an email btw. 

function toggleMenu() {
  isActive.value = !isActive.value;
}

const isAdmin=ref(false);

</script>



<template>
<nav class="navbar is-primary m-auto" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <RouterLink to="/" class="navbar-item">
      
        <img src="../assets/vite.svg" width="28" height="28">
      
      </RouterLink>
    </a>

    <a role="button" @click="toggleMenu" :class="{'is-active': isActive } " class="navbar-burger m-auto" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active': isActive } " id="navbarBasicExample" class="navbar-menu m-auto"  >
    <div class="navbar-start">
      
      <RouterLink to="/Activity" class="navbar-item m-auto">
        <span class="icon-text">
        <span class="icon">
          <i class="fas fa-running"></i>
        </span>
        <span>Activity</span>
      </span>
      </RouterLink>

      <RouterLink to="/Statistics" class="navbar-item">
        <span class="icon-text">
        <span class="icon">
          <i class="fas fa-chart-line"></i>
        </span>
        <span>Stats</span>
      </span>
      </RouterLink>

      <RouterLink to="/FriendsActivity" class="navbar-item">
        <span class="icon-text">
        <span class="icon">
          <i class="fas fa-users"></i>
        </span>
        <span>Friends Acivity</span>
      </span>
      </RouterLink>

      <RouterLink to="/search" class="navbar-item">
        <span class="icon-text">
        <span class="icon">
          <i class="fas fa-search"></i>
        </span>
        <span>People Search</span>
      </span>
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Admin
        </a>

        <div class="navbar-dropdown" v-if="isAdmin">
          <RouterLink to="/products" class="navbar-item">
            Users
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <UserImage></UserImage>
            <strong> {{getCurrentUser()}}</strong>
          </a>
        </div>
      </div>
    </div>
    
      <div class="navbar-item has-dropdown is-hoverable  button is-light margin">
        <a class="navbar-link" v-if="getCurrentUser()">
            <a @click="setCurrentUser('');  isAdmin=false;">
            Logout
          </a>
        </a>
        <a class="navbar-link" v-else>
          Login
      
          <div class="navbar-dropdown">
            <div class="navbar-item" @click="setCurrentUser('plotkinm@newpaltz.edu'); isAdmin=true">
              Moshe
            </div>
            <div class="navbar-item" @click="setCurrentUser('jane.smith@example.com'); isAdmin=false;">
              Jane Smith
            </div>
            <div class="navbar-item" @click="setCurrentUser('mike.johnson@example.com'); isAdmin=false;">
              Mike Johnson
          </div>
          
          </div>
        </a>
        </div>




        <p class="control">
            <a class="bd-tw-button button margin" data-social-network="Twitter" >
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>



  </div>
</nav>
</template>

<style scoped>

  .UserImage{
    margin-right: 10px;
  }

    .router-link-active {
        border-bottom: 2px solid #00d1b2;
    }

    .margin{
      margin:7px;
    }
</style>