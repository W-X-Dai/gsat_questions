<template>
    <div class="Register">
        <div class="Wrapper">
            <form @submit.prevent="userRegistration">
                <h3>Register</h3>

                <div class="input-box">
                    <input type="text" placeholder="Username" required class="form-control form-control-lg" v-model="user.name" />
                </div>

                <div class="input-box">
                    <input type="email" placeholder="Email" required class="form-control form-control-lg" v-model="user.email" />
                </div>

                <div class="input-box">
                    <input type="password" placeholder="Password" required class="form-control form-control-lg" v-model="user.password" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">
                    註冊
                </button>

                <p class="forgot-password text-right">
                    已經註冊過了?
                    <a href="#/login">Login</a>
                </p>
            </form>
        </div>
    </div>
</template>

<style scoped>
@import "@/Style/register_style.css";
</style>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        userRegistration() {
            firebaseAuth
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((res) => {
                    res.user
                        .updateProfile({
                            displayName: this.user.name,
                        })
                        .then(() => {
                            this.$router.push("/login");
                        });
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
    },
};
</script>