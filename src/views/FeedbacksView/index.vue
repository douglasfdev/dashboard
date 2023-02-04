<template>
  <header class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </header>

  <section id="feedbacks" class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Feedbacks
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Detalhes de todos os feedbacks recebidos
    </p>
  </section>

  <section id="listagem" class="flex justify-center w-full pb-20">
    <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">

      <div>
        <h1 class="text-3xl font-black text-brand-darkgray">
          Listagem
        </h1>
        <suspense>
          <template #default>
            <filters
              class="mt-8 animate__animated animate__fadeIn animate__faster"
            />
          </template>
          <template #fallback>
            <filters-loading class="mt-8" />
          </template>
        </suspense>

      </div>
      <section id="card" class="px-10 pt-20 col-span-3">
        <p
          class="text-lg text-center text-gray-800 font-regular"
          v-if="state.hasError">
          Aconteceu um erro ao carregar os Feedbacks 🥺
        </p>

        <p
        v-if="!state.feedbacks.length && !state.isLoading"
        class="text-lg text-center text-gray-800 font-regular">
          Ainda nenhum feedback recebido
        </p>
      <feedback-card-loading v-if="state.isLoading" />
      <feedback-card
        v-else
        v-for="(feedback, index) in state.feedbacks"
        :key="feedback.id"
        :is-opened="index === 0"
        :feedback="feedback"
        class="mb-8"
      />
      </section>

    </div>
  </section>
</template>

<script>
import Filters from './Filters.vue'
import FiltersLoading from './FiltersLoading.vue'
import HeaderLogged from '@/components/HeaderLogged'
import FeedbackCard from '@/components/FeedbackCard'
import FeedbackCardLoading from '@/components/FeedbackCard/Loading'
import { onMounted, reactive } from 'vue'
import services from '@/services'

export default {
  name: 'Feedbacks',
  components: {
    HeaderLogged,
    Filters,
    FiltersLoading,
    FeedbackCard,
    FeedbackCardLoading
  },
  setup () {
    const state = reactive({
      isLoading: false,
      feedbacks: [],
      currentFeedbackType: '',
      pagination: {
        limit: 5,
        offset: 0
      },
      hasError: false
    })

    onMounted(() => {
      fetchFeedbacks()
    })

    function handleErrors (er) {
      state.hasError = !!er
    }

    async function fetchFeedbacks () {
      try {
        state.isLoading = true
        const { data } = await services.feedbacks.getAll({
          ...state.pagination,
          type: state.currentFeedbackType
        })

        state.feedbacks = data.results
        state.pagination = data.pagination
        state.isLoading = false
      } catch (er) {
        handleErrors(er)
      }
    }

    return {
      state
    }
  }
}
</script>
