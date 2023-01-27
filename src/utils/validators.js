export function validateEmptyAndLength3 (value) {
  const campoObrigatorio = '*Este campo é obrigatório'
  if (!value) return campoObrigatorio

  const menorQueTresCaracteres = '*Este campo precisa de pelo menos três caracteres'
  if (value.length < 3) return menorQueTresCaracteres

  return true
}

export function validateEmptyAndEmail (value) {
  const campoObrigatorio = '*Este campo é obrigatório'
  if (!value) return campoObrigatorio

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[\w]+(\.[\w]+)?$/i.test(value)
  const email = '*Este campo precisa ser um e-mail'
  if (!isValid) return email

  return true
}
