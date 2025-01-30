<template>
  <div>
    <!---primary, success, info, warning, danger, dark, light-->
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand href="#">小雞教學網</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Contact</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Purchase</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>學測題庫</template>
            <b-dropdown-item href="#/mathproblems">數學</b-dropdown-item>
            <b-dropdown-item href="#">自然</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>分科題庫</template>
            <b-dropdown-item href="#">數學</b-dropdown-item>
            <b-dropdown-item href="#">物理</b-dropdown-item>
            <b-dropdown-item href="#">化學</b-dropdown-item>
            <b-dropdown-item href="#">生物</b-dropdown-item>

            <b-dropdown-item><router-link to="/login">Login</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/register">Register</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/logout">Logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#"><button @click="goToProfile">👤 Profile</button></b-dropdown-item>
            <b-dropdown-item href="#">我的課程</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default {
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const currentUserId = ref(null);

    // ✅ 頁面載入時檢查設備是否符合規則
    onMounted(async () => {
      const user = auth.currentUser;
      if (!user) {
        currentUserId.value = null;
        return;
      }

      // 取得本機設備 ID
      const localDeviceId = localStorage.getItem("deviceId");

      // ✅ 檢查 Firestore 綁定的設備
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef); // ✅ 確保這行被執行

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.deviceId && userData.deviceId !== localDeviceId) {
          console.error("❌ 此帳號已綁定其他設備，強制登出！");
          await signOut(auth);
          localStorage.removeItem("deviceId");
          currentUserId.value = null;
          return;
        }
      }

      currentUserId.value = user.uid;
    });

    // ✅ 進入 Profile 頁面前，檢查設備
    const goToProfile = async () => {
      const user = auth.currentUser;
      if (!user) {
        alert("❌ 請先登入！");
        return;
      }

      const localDeviceId = localStorage.getItem("deviceId");
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.deviceId && userData.deviceId !== localDeviceId) {
          alert("❌ 此帳號已綁定其他設備，請登出其他設備後再試！");
          await signOut(auth);
          localStorage.removeItem("deviceId");
          return;
        }
      }

      router.push(`/profile/${user.uid}`);
    };

    // ✅ 登出並清除設備碼
    const logout = async () => {
      try {
        await signOut(auth);
        localStorage.removeItem("deviceId");
        console.log("✅ 已登出");
        router.push("/login");
      } catch (error) {
        console.error("❌ 登出失敗:", error);
      }
    };

    return { goToProfile, logout, currentUserId };
  },
};
</script>
