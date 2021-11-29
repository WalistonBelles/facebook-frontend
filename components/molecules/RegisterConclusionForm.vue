<template>
  <form @submit.prevent="onSubmit()">
    <div class="fom-field">
      <BaseInput
        type="email"
        placeholder="E-mail"
        v-model="user.email"
        readonly
      />
    </div>
    <div class="fom-field">
      <BaseInput type="text" placeholder="Nome" v-model="user.name" />
    </div>
    <div class="fom-field">
      <BaseInput type="password" placeholder="Senha" v-model="user.password" />
    </div>
    <div class="fom-field">
      <BaseInput type="password" placeholder="Repita a senha" v-model="user.passwordConfirmation" />
    </div>
    <BaseButton text="Próxima etapa" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'

export default Vue.extend({
  data() {
    return {
      user: {
        email: userRegister.$user.email,
        name: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        await userRegister.update({
          key: this.$route.params.key,
          ...this.user
        })
        this.$notify({
          type: 'success',
          text: 'Cadastro realizado com sucesso!'
        })
        await Object.keys(this.user).map((item) => {
          this.user[item] = ''
        })
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Opss... Algo deu errado :('
        })
      }
    }
  }
})

</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-gap: 0.8rem;
  button {
    width: 100%;
  }
  a {
    justify-self: end;
    font-size: 14px;
    color: color(white);
  }
  input {
    width: 100% !important;
    padding: 0.7rem 1.2rem;
  }
}
</style>
