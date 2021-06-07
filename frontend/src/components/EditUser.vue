<template>
    <div>
        <div class="field">
            <label class="label"> First Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="firstName">

            </div>
        </div>

        <div class="field">
            <label class="label"> Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="last Name" v-model="lastName">

            </div>
        </div>
                <div class="field">
            <label class="label"> Mob Tel</label>
            <div class="control">
                <input class="input" type="text" placeholder="mob tel" v-model="mobTel">

            </div>
        </div>

        <div class="field">
            <label class="label"> Email</label>
            <div class="control">
            <input class="input" type="text" placeholder="Email" v-model="email">

            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="update">Update</button>
        </div>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: "updateUser",
    data() {
        return {
            firstName: "",
            lastName:   "",
            mobTel: "",
            email: "",
        }

    },
    created: function () {
        this.showUserById()
    },
    methods: {
        //get User by ID
        async showUserById() {
            try {
                const respronse = await axios.get (`http://localhost:3000/search/${this.$route.params.id}`);
                this.firstName = respronse.data.firstName;
                this.lastName = respronse.data.lastName;
                this.mobTel = respronse.data.mobTel;
                this.email = respronse.data.email;

            } catch (error) {
                console.log(error)
            }
        },
        //Update User
        async update() {
            try {
                await axios.put(`http://localhost:3000/users/${this.$route.params.id}`,
                {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    mobTel: this.mobTel,
                    email: this.email,

                }
                );
                this.firstName ="",
                this.lastName = "",
                this.mobTel = "",
                this.email = "",
                this.$router.push("/")

            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>