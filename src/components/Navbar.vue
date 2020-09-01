<template>
   <v-card color="grey lighten-4" flat height="50px" tile>
      <v-toolbar dense>
         <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title>ArztApp.</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
         </v-btn>
         <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
         </v-btn>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer">
        <v-list>
         <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
            <v-list-item-icon>
               <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
         </v-list-item>
         </v-list>
      </v-navigation-drawer>
      
   </v-card>
</template>


<script>
   export default {
     data() {
       return {
         drawer: false,
         items: [
           { title: "Dashboard", icon: "mdi-view-dashboard", route: "/"},
           { title: "My Projects", icon: "mdi-image", route: "/projects" },
           { title: "Team", icon: "mdi-help-box", route: "/team" },
         ],
       };
     },
   };
</script>