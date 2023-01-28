export default httpClient => ({
  register: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', {
      name,
      email,
      password
    })

    const data = await response.data

    console.log(data)

    let errors = null

    if (!data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data,
      errors
    }
  },
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })

    const data = await response.data
    console.log(data)

    let errors = null

    if (!data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data,
      errors
    }
  }
})
