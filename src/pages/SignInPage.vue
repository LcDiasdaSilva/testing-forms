<style setup lang="scss">
.sign-in-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #logo {
    width: 102px;
    height: auto;
  }
}
</style>


<template>
  <main class="sign-in-page">
    <img id="logo" width="102" height="102" src="/logo.webp" alt="logo" />
    <SignInForm @submit="submit" />
  </main>
</template>

<script setup lang="ts">
interface IPayload {
  name: string,
  email: string,
  password: string
}
import SignInForm from '@/components/SignInForm.vue';
function submit(payload: IPayload) {
  console.log(payload); submit

}
</script>

