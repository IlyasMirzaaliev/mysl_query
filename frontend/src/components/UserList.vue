<template>
  <div>

    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Create new</router-link
    >
      <div>
           <!-- <input type="search" v-model="search" class="search" placeholder="search User"> -->
           <!-- <p>{{ this.persons }}</p> -->
           <!-- <p>{{ search }}</p> -->
      </div>

    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
           <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mob Tel</th>

          <th class="has-text-centered">Actions</th>

        </tr>
      </thead>

      <tbody>
        <tr  v-for="person in persons" :key="person.userID">

          <td>{{ person.userID }}</td>
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.mobTel }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: person.userID } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteUser(person.userID)"
              >Delete</a
            >

          </td>

        </tr>

      </tbody>

    </table>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    name: "UserList",
    data() {
        return {
            search: "",
            persons: [],
        }
    },
    created() {
        this.findAll();
    },
    // computed: {
    //   persons() {
    //     return this.data
    //   }
    // },
    methods: {
        async findAll() {
            try {
                const response = await axios.get(`http://localhost:3000/users`);
                  this.persons = response.data
            } catch (error) {
                console.log(error)
            }
        },

        async deleteUser(userID) {
            try {
                await axios.delete(`http://localhost:3000/users/${userID}`)
                this.findAll()
                console.log(`user deleted`)
            } catch (error) {
               confirm(`ERROR FROM FRONTEND` + error)
            }
        }
    }
}
</script>