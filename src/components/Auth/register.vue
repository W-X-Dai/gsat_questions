<template>
    <div class="Register">
        <div class="wrapper">
            <form @submit.prevent="userRegistration">
                <h3>Register</h3>

                <div class="input-box">
                    <input type="text" placeholder="Username" required class="form-control form-control-lg"
                        v-model="user.name" />
                    <i class="bx bxs-user"></i>
                </div>

                <div class="input-box">
                    <input type="email" placeholder="Email" required class="form-control form-control-lg"
                        v-model="user.email" />
                    <i class="bx bxs-envelope"></i>
                </div>

                <div class="input-box">
                    <input type="password" placeholder="Password" required class="form-control form-control-lg"
                        v-model="user.password" />
                    <i class="bx bxs-lock-alt"></i>
                </div>

                <button @click="userRegistration" type="button" class="btn btn-dark btn-lg btn-block">
                    Register
                </button>

                <p class="forgot-password text-right">
                    Already have an account?
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
import { firebaseAuth, db } from "@/config/firebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
        async userRegistration() {
            try {
                console.log("開始註冊...");
                const userCredential = await createUserWithEmailAndPassword(firebaseAuth, this.user.email, this.user.password);
                const user = userCredential.user;
                console.log("使用者已創建:", user);
                // Update display name
                await updateProfile(user, {
                    displayName: this.user.name,
                });
                // 儲存額外資料到 Firestore
                await setDoc(doc(db, "users", user.uid), {
                    name: this.user.name,
                    email: this.user.email,
                    bio: "Hello! I am new here.",
                    profileImage: "", // 這裡可以存放個人頭像的 URL
                });
                // Redirect to login page after successful registration
                setTimeout(() => {
                    this.$router.push("/login");
                }, 1000);
            } catch (error) {
                alert(error.message);
            }
        },
    },
};
</script>