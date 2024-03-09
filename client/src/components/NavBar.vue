<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';


let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

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
      
      <RouterLink to="/documentation" class="navbar-item m-auto">
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

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            Users
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
        </div>
      </div>
    </div>
    
      <div class="navbar-item has-dropdown is-hoverable  button is-light">
          <a class="navbar-link">
            Log in
          </a>
          
          <div class="navbar-dropdown">
            <RouterLink to="/about" class="navbar-item">
              Moshe
            </RouterLink>
            <RouterLink to="/about" class="navbar-item">
              Person1
            </RouterLink>
            <RouterLink to="/about" class="navbar-item">
              Person2
            </RouterLink>

          </div>
        </div>




        <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
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

    .router-link-active {
        border-bottom: 2px solid #00d1b2;
    }


</style>