<template>
<custom-header
  @create-account="handleAccountCreate"
  @login="handleLogin"
/>
<contact />

<footer class="flex justify-center py-10 bg-brand-gray">
  <p class="font-medium text-center text-gray-800">Feedbacker &#169; 2023</p>
</footer>

</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import useModal from '../../hooks/useModal'

export default {
  components: { CustomHeader, Contact },
  setup () {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ path: '/feedbacks' })
      }
    })

    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleAccountCreate () {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>

<style>

</style>
