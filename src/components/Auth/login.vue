<template>
    <div class="Login">
        <div class="wrapper">
            <form @submit.prevent="userLogin">
                <h3>Login</h3>

                <div class="input-box">
                    <input type="email" class="form-control form-control-lg" placeholder="E-mail" required
                        v-model="user.email" />
                    <i class="bx bxs-envelope"></i>
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
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";


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
        async userLogin() {
            try {
                const userCredential = await signInWithEmailAndPassword(firebaseAuth, this.user.email, this.user.password);
                const user = userCredential.user;

                console.log("✅ 登入成功，使用者 ID:", user.uid);

                // 取得設備 ID，若不存在則產生新 UUID
                let deviceId = localStorage.getItem("deviceId");
                if (!deviceId) {
                    deviceId = generateDeviceId();
                    localStorage.setItem("deviceId", deviceId); // 存入 localStorage
                }


                // 取得 Firestore 使用者資料
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();

                    // 檢查設備碼是否一致
                    if (userData.deviceId && userData.deviceId !== deviceId) {
                        console.error("❌ 此帳號已在其他設備登入！");
                        alert("此帳號已綁定其他設備，請登出其他設備後再試！");
                        await signOut(firebaseAuth); // 強制登出
                        return;
                    }
                }

                // 更新 Firestore 綁定設備碼
                await updateDoc(userDocRef, { deviceId });

                const profilePath = '/';
                console.log("🚀 即將導航到:", profilePath);

                this.$router.push(profilePath);
            } catch (error) {
                console.error("❌ 登入失敗:", error);
                alert(error.message);
            }
        },
    },
};

// ✅ 使用 UUID 產生唯一 `deviceId`
function generateDeviceId() {
    return crypto.randomUUID();
}
</script>