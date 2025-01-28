<template>
    <div class="Login">
        <div class="wrapper">
            <form @submit.prevent="userLogin">
                <h3>Login</h3>

                <div class="input-box">
                    <input type="email" class="form-control form-control-lg" placeholder="E-mail" required
                        v-model="user.email" />
                    <!-- <i class="bx bxs-envelope"></i> -->
                </div>

                <div class="input-box">
                    <input type="password" class="form-control form-control-lg" placeholder="Password" required
                        v-model="user.password" />
                    <i class="bx bxs-lock-alt"></i>
                </div>

                <div class="remember-forgot">
                    <label>
                        <input type="checkbox">
                        Remember me
                    </label>
                    <a href="#/forgotPassword">Forgot Password?</a>
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Login</button>
                <p class="forgot-password text-right">
                    Don't have an account?
                    <a href="#/register">
                        Register
                    </a>
                </p>
            </form>
        </div>
    </div>
</template>

<style scoped>
@import "@/Style/login_style.css";
</style>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        userLogin() {
            firebaseAuth
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => {
                    this.$router.push("/");
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
    },
};
</script>