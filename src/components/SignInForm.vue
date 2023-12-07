
<style scoped lang="scss">
.sign-in-form {
  width: 100%;
  max-width: 300px;

  &__form-group {
    margin: .5rem 0;

    input {
      width: 100%;
      padding: .5rem 1rem;
    }
  }

  &__button {
    width: 100%;
    background: #2979FF;
    color: #fff;
    border: solid 1px #2979FF;
    cursor: pointer;
    padding: .5rem 2rem;
  }
}
</style>
<template>
  <form @submit.prevent="submit" id="form-sign-in" class="sign-in-form">
    <div class="sign-in-form__form-group">
      <div>
        <label id="label-name" for="input-name">Nome</label>
      </div>
      <input id="input-name" type="text" placeholder="Digite seu nome" v-model="payload.name" />
    </div>
    <div class="sign-in-form__form-group">
      <div>
        <label id="label-email" for="input-email">E-mail</label>
      </div>
      <input id="input-email" type="text" placeholder="Digite seu e-mail" v-model="payload.email" />
    </div>
    <div class="sign-in-form__form-group">
      <div>
        <label id="label-password" for="input-password">Senha</label>
      </div>
      <input id="input-password" type="password" placeholder="Digite sua senha" v-model="payload.password" />
    </div>
    <div class="sign-in-form__footer">
      <button type="submit" id="btn-register" class="sign-in-form__button">Cadastrar</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const emit = defineEmits(['submit'])

const payload = reactive({
  name: '',
  email: '',
  password: ''
})

function submit() {
  emit('submit', payload);

}

</script>