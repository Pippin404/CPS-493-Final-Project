<script setup lang="ts">

  import { ref, computed, onMounted } from 'vue';
  import { type ActivityData, getActivity } from '@/model/products';
  let products = ref([] as ActivityData[]);
  import { getCurrentUser } from '@/model/currentUser';

  onMounted(async () => {
      products.value = await getActivity();
  });
  let totalDistance = ref(0);
  let totalDuration = ref(0);
  let averageTime = ref(0);



  function addToTotalDistance(distance: number) {
    totalDistance.value += distance;
  }

  function addToTotalDuration(duration: number) {
    totalDuration.value += duration;
  }

  function averageTimeCalc() {
    averageTime.value = totalDistance.value / totalDuration.value;
  }


</script>

<template>
  <div class="Stats">
    <div class="columns">
      <!--Card 1-->
      <div class="column column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-content">
            <p class="title">
              Today
            </p>

            <!--Loops thru and displays the users Stats IF I CAN GET THE FUCKING PROFILE DATA FROM THE NAVBAR-->
            <p class="subtitle value">
              0 Ft
            </p>
            <p class="subtitle value">
              Duration: 0 min
            </p>
            <p class="subtitle value">
              Avr. Pace: 0ft
            </p>


            
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <p class="title">
              This Week
            </p>

            <p class="subtitle value">
              0 Ft
            </p>
            <p class="subtitle value">
              Duration: 0 min
            </p>
            <p class="subtitle value">
              Avr. Pace: 0ft
            </p>
            
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <p class="title">
              All Time
            </p>

            <div v-for="product in products" :key="product.email">
            <div v-if="getCurrentUser() === product.email">
                {{addToTotalDistance(product.distance)}}
                {{addToTotalDuration(product.duration)}}
            </div>
        </div>
            



            <p class="subtitle value">
              {{ totalDistance}} Ft
            </p>
            <p class="subtitle value">
              Duration: {{totalDuration}} min
            </p>
            <p class="subtitle value">
              {{ averageTimeCalc() }}
              Avr. Pace: {{ averageTime }} ft/min
            </p>


            
          </div>
        </div>

      </div>
    </div>
  </div>
  </template>
  
  <style>
  </style>
  