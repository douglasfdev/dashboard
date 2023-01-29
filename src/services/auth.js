export default httpClient => ({
  register: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', {
      name,
      email,
      password
    })

    const data = await response.data

    let errors = null

    if (!data) {
      errors = {
        status: response.status,
        statusText: response.statusText
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

    let errors = null

    if (!data) {
      errors = {
        status: response.status,
        statusText: response.statusText
      }
    }

    return {
      data,
      errors
    }
  }
})
