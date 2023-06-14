<template>
  <v-app>
    <Menu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
export default {
  name: 'App',
  components: {
    Menu
  },
  data: () => ({
    //
  }),
};
</script>
