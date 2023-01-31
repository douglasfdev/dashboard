<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <img class="w-full" src="@/assets/images/logo_white.png" alt="Logo">
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
          @click="() => router.push({ path: '/credentials'})"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor- pointer focus:outline-none"
        >
          Credenciais
        </li>
        <li
          @click="() => router.push({ path: '/feedbacks'})"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor- pointer focus:outline-none"
        >
          Feedbacks
        </li>
        <li
          @click="handleLogut"
          class="px-6 py-2 font-bold bg-white rounded-full cursor-pointer text-brand-main focus:outline-none">
          {{logoutLabel}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import useStore from '@/hooks/useStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { cleanCurrentUser } from '@/store/user'

export default {
  setup () {
    const router = useRouter()
    const store = useStore('User')

    const logoutLabel = computed(() => {
      if (!store.currentUser.name) {
        return '... Saindo'
      }
      return `${store.currentUser.name} (sair)`
    })

    function handleLogut () {
      window.localStorage.removeItem('token')
      cleanCurrentUser()
      router.push({ path: '/' })
    }

    return {
      router,
      logoutLabel,
      handleLogut
    }
  }

}
</script>
