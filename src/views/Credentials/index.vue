<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </header>
  <section class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Credenciais
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Guia de instalação e geração de suas credenciais
    </p>
  </section>
</template>

<script>
import HeaderLogged from '@/components/HeaderLogged'

export default {
  components: { HeaderLogged }
}

</script>
}
