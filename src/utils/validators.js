
export  const required = value => {
  if (value) return undefined

  return 'Field is required'
}
//
// export const maxLength10 = value => {
//   debugger
//   return value.length < 10 ? undefined : 'Max length 10'
// }