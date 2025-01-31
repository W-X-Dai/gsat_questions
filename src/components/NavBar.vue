<template>
  <div>
    <b-navbar toggleable="lg" class="custom-navbar">
      <b-navbar-brand href="#">
        <img
          src="../assets/chicken1.png"
          width="30"
          class="d-inline-block align-top"
          alt="vue_icon"
        />
        <img
          src="../assets/navbar_title_transparent.png"
          height="35"
          class="d-inline-block align-top"
          alt="vue_icon"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Contact</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Purchase</b-nav-item>
          <b-nav-item-dropdown right>
            <template #button-content>學測題庫</template>
            <b-dropdown-item href="#/mathproblems">數學</b-dropdown-item>
            <b-dropdown-item href="#">自然</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template #button-content>分科題庫</template>
            <b-dropdown-item href="#">數學</b-dropdown-item>
            <b-dropdown-item href="#">物理</b-dropdown-item>
            <b-dropdown-item href="#">化學</b-dropdown-item>
            <b-dropdown-item href="#">生物</b-dropdown-item>
  
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
  
          <b-nav-item-dropdown right>
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
  export default {
  
  }
</script>

<style>
.custom-navbar {
  background-color: #f5ecd5; /* 自定義背景色 */
  color: #000000; /* 設置文字顏色 */
}

.custom-navbar .navbar-brand,
.custom-navbar .nav-link {
  color: #000000 !important; /* 確保品牌與導航文字的清晰度 */
}

.custom-navbar .nav-link:hover {
  color: #555555 !important; /* 設置滑鼠懸停效果 */
}
</style>
