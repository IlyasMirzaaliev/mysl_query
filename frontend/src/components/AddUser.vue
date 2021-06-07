<template>
    <div>
        <div class="field">
            <label class="label">First name</label>
            <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="firstName">
            </div>
        </div>
        <div class="field">
            <label class="labes">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Last Name" v-model="lastName">
            </div>
        </div>

<div class="field">
            <label class="labes">Mob Tel</label>
            <div class="control">
                <input class="input" type="text" placeholder="Mob Tel" v-model="mobTel">
            </div>
        </div>




            <div class="field">
            <label class="labes">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="email">
            </div>
        </div>
        <div class="control">
            <button class="button  is-success" @click="saveUser">Save</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios'


export default {
    name: "addUser",
    data() {
        return {
            firstName: "",
            lastName: "",
            mobTel: "",
            email: ""
        }
    },
    methods: {
        async saveUser() {
            try {
            await axios.post("http://localhost:3000/users/", {
                firstName: this.firstName,
                lastName: this.lastName,
                mobTel: this.mobTel,
                email: this.email
            });
            this.firstName = "";
            this.lastName = "";
            this.mobTel = "";
            this.email = "";
            this.$router.push('/')
            } catch (err) {
                console.log(err);
            }

        }
    }
}
</script>