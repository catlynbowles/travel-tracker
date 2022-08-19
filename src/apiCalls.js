export const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Oops!')
      }
    })
}