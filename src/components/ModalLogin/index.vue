<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">
      Entre na sua conta
    </h1>

    <button
    @click="close"
      class="text-4xl text-gray-600 focus:outline-none"
    >
      &times;
    </button>
  </section>
  <section class="mt-16">
    <form>

    </form>
  </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import useModal from '@/hooks/useModal'
export default {
  setup () {
    const modal = useModal()
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      }
    })

    return {
      state,
      close: modal.close
    }
  }
}
</script>

<style>

</style>
