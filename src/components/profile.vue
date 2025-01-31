<template>
    <div v-if="user">
      <h1>{{ user.name }}'s Profile</h1>
      <!-- 頭像：如果沒有 `photoURL`，使用預設圖片 -->
      <img 
        :src="user.photoURL || defaultImage" 
        alt="User Profile Image" 
        width="150"
      />
      <!-- 修改 Bio -->
      <textarea v-model="bio" placeholder="Edit your bio"></textarea>
    
      <button @click="updateProfile">更新個人資料</button>

      <p v-if="user && user.uid">User Id: {{ user.uid }}</p>
      <p>Bio: {{ user.bio || "No bio available" }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { ref, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import { db } from "@/config/firebaseConfig";
  import { doc, getDoc, updateDoc } from "firebase/firestore";
  import defaultAvatar from "@/assets/default_avatar.png";
  
  export default {
    setup() {
        const route = useRoute();
        const userId = ref(null);
        const user = ref(null);
        const bio = ref(""); // 用於編輯 Bio
   
        // 預設頭像
        const defaultImage = defaultAvatar;
      // 監聽 userId 變化，自動重新獲取資料
      watchEffect(async () => {
        userId.value = route.params.userId; // 確保 `params.userId` 正確對應 `router.js`
        console.log("🚀 取得的 userId:", userId.value);
  
        if (!userId.value) {
          console.error("❌ userId 為 undefined，請檢查 Vue Router 設定！");
          return;
        }
  
        try {
          const userDocRef = doc(db, "users", userId.value);
          const userDocSnap = await getDoc(userDocRef);
  
          if (userDocSnap.exists()) {
            user.value = userDocSnap.data();
            console.log("✅ 取得的使用者資料:", user.value);
          } else {
            console.log("❌ 使用者不存在！");
          }
        } catch (error) {
          console.error("❌ Error fetching user data:", error);
        }
      });

    // 更新個人資料
    const updateProfileData = async () => {
      if (!userId.value) return;
      
      try {
        await updateDoc(doc(db, "users", userId.value), { bio: bio.value });
        user.value.bio = bio.value;
        console.log("✅ Bio 更新成功！");
      } catch (error) {
        console.error("❌ 無法更新個人資料:", error);
      }
    };
      
        return { user, userId, bio, defaultImage, updateProfile: updateProfileData };
    },
  };
  </script>
  


/*
const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const storageReference = storageRef(storage, `profilePictures/${userId.value}`);

        // 確保檔案上傳成功
        const uploadTask = await uploadBytes(storageReference, file);
        console.log("✅ 檔案上傳成功:", uploadTask);

        // 取得圖片 URL
        const downloadURL = await getDownloadURL(storageReference);
        console.log("✅ 下載 URL:", downloadURL);

        await updateProfile(auth.currentUser, { photoURL: downloadURL });

        // 更新 Firestore
        await updateDoc(doc(db, "users", userId.value), { photoURL: downloadURL });

        user.value.photoURL = downloadURL;
    } catch (error) {
        console.error("❌ 圖片上傳失敗:", error);
    }
 };
*/