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
            <b-dropdown-item href="#">Profile</b-dropdown-item>
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
