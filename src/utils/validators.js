export const loginFormValidator = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Обязательное поле'
  } else if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(values.email)) {
    errors.email = 'Введите корректный email '
  }

  if (!values.password) {
    errors.password = 'Обязательное поле'
  }

  return errors
}

export const required = value => {
  if (value) return undefined
  return 'Обязательное поле'
}

