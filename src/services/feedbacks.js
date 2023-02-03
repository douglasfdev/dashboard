const defaultPagination = {
  limite: 5,
  offset: 0
}

export default httpClient => ({
  getAll: async ({ type, limit, offset } = defaultPagination) => {
    const queryParam = { limit, offset }

    if (type) {
      queryParam.type = type
    }

    const res = await httpClient.get('/feedbacks', { params: queryParam })
    const data = res.data

    return {
      data
    }
  },
  getSummary: async () => {
    const res = await httpClient.get('/feedbacks/summary')
    const data = res.data

    return {
      data
    }
  }
})
