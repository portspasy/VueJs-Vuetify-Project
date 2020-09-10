<template>
  <div class="doctors">
    <h1>This is an Doctors Page</h1>

    <v-container fluid class="my-5">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="doctor in doctors"
          :key="doctor.name"
        >
          <v-card text class="ma-3 elevation-5">
            <v-responsive class="pa-3">
              <v-avatar size="80">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
              </v-avatar>
            </v-responsive>
            <v-card-title>
              {{ doctor.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ doctor.role }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>Info</v-btn>
              <v-btn text>Message</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctors: [
        {
          name: "Name 1",
          role: "Web developer",
          avatar: "/avatar1.png",
        },
        { name: "Name 2", role: "Graphic designer", avatar: "/avatar2.png" },
        { name: "Name 3", role: "Web developer", avatar: "/avatar3.png" },
        {
          name: "Name 4",
          role: "Social media maverick",
          avatar: "/avatar-4.png",
        },
        { name: "Name 5", role: "Sales guru", avatar: "/avatar5.png" },
      ],
    };
  },
};
</script>
