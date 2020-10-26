<template>
 <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer/>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- router -->
    <v-navigation-drawer v-model="drawer">
          sdfsdf
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <!-- footer -->
    <v-footer app color="primary" dark absolute>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  drawer: false
}
</script>
