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
      </v-row>

      <v-card flat class="pa-3" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1"
              >Headline 5</v-list-item-title
            >
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
