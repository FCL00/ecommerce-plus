<template>
  <div class="container">
    <ul class="action-link">
      <li>FEEDBACK</li>
      <li>SAVE MORE</li>
      <li>PROFILE</li>
      <router-link to="/login">LOGIN</router-link>
      <router-link to="/sign-up">SIGN-UP</router-link>
    </ul>
    <p>GET BETTER DEALS ON SHOP PLUS!</p>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
p {
  display: none;
}
.container {
  display: flex;
  justify-content: center;
  background-color: #000000;
  color: white;
}
.action-link {
  display: flex;
  padding: 4px;
  justify-content: end;
  width: 1440px;
}

.action-link > * {
  margin-left: 20px;
}

.action-link a,
li {
  text-decoration: none;
  list-style-type: none;
  font-size: 12px;
  cursor: pointer;
}
a,
a:visited {
  color: white;
}

@media (max-width: 500px) {
  .action-link {
    display: none;
  }
  p {
    display: block;
  }
}
</style>
