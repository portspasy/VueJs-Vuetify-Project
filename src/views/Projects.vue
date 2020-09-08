<template>
  <div class="projects">
    <h1>This is an Projects Page</h1>

    <v-container fluid class="my-5">
      <v-row>
        <v-col md="6" sm="12" cols="12">
          <v-btn block class="primary">Button 1</v-btn>
        </v-col>
        <v-col md="6" sm="12" cols="12">
          <v-btn block class="primary">Button 2</v-btn>
        </v-col>

        <v-col cols="12" style="width: 100%; max-width: 100%; overview: hidden;">
          <Map/>
        </v-col>
      </v-row>

    </v-container>
    
  </div>
</template>

<script>
import Map from "@/components/Map";
export default {
   components: { Map },
};
</script>
