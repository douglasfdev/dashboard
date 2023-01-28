export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/users/me')
    const data = await response.data
    console.log(`service -> ${data}`)

    return {
      data
    }
  },
  generateApikey: async () => {
    const response = await httpClient.post('/users/me/apikey')

    return {
      data: response.data
    }
  }
})
