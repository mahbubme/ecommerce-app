<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
    import Header from './views/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
</style>
