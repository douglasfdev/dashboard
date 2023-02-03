<template>
  <header class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </header>

  <section class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Feedbacks
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Detalhes de todos os feedbacks recebidos
    </p>
  </section>

  <section id="listagem"
    class="flex justify-center w-full pb-20"
  >
    <div class="w-4/5 max-w-6xl py-10 grid grid-cols4 gap-2">

      <div>
        <h1 class="text-3xl font-black text-brand-darkgray">
          Listagem
          <suspense>
            <template #default>
              <filters />
            </template>
            <template #fallback>
              ...loading
            </template>
          </suspense>
        </h1>
      </div>

      <div class="px-10 pt-20 col-span-3">

      </div>
    </div>
  </section>
</template>

<script>
import Filters from './Filters.vue'
import HeaderLogged from '@/components/HeaderLogged'

export default {
  name: 'Feedbacks',
  components: { HeaderLogged, Filters }

}
</script>

<style>

</style>
