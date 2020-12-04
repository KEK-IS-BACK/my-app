export const updateObjInArray = (items, propName, itemId, objPropsName) => {
  return items.map(item => {
    if (item[propName] === itemId) {
      return {...item, ...objPropsName}
    }
    return item
  })
}