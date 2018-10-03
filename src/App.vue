<template>
  <div id="app">
    <b-container class="bv-example-row header">
        <app-header></app-header>
    </b-container>
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
    .header{
        margin-bottom: 30px;
    }
</style>
