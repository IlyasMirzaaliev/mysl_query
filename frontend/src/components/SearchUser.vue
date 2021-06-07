<template>
<div>
      <input type="serach" class="search" placeholder="First Name">
        <button class="button is-success" @click="search"></button>
</div>

</template>


<script>


import axios from "axios"

export default {
    name : "SearchUser",
    data() {
        return
        {
            firstName: ""
            lastName: ""
            email: ""
        }
    },
    created: function() {
        this.search()
    },
    methods: {
        async search() {
            try {
                const respronse = await axios.get(`http://localhost:3000/users/${this.$route.params.id}`  );
                this.firstName = respronse.data.firstName;
                this.lastName = respronse.data.lastName;
                this.email = respronse.data.email


            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.$router.push('/')
            } catch (error) {
                    console.log(error)
            }
        }
    }
}
</script>