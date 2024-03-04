<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

</script>



<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" @click="toggleMenu" :class="{'is-active': isActive } " class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active': isActive } " id="navbarBasicExample" class="navbar-menu"  >
    <div class="navbar-start">
      <RouterLink to="/" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/documentation" class="navbar-item">
        Activity
      </RouterLink>

      <RouterLink to="/documentation" class="navbar-item">
        Statistics
      </RouterLink>

      <RouterLink to="/FriendsActivity" class="navbar-item">
        Friends Activity
      </RouterLink>

      <RouterLink to="/documentation" class="navbar-item">
        People Search
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