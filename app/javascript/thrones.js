$(() => {
  $('button#get-books').on('click', () => {
    fetch('https://anapioficeandfire.com/api/books')
      .then(resp => resp.json())
      .then(json => {

        console.log(json)
        renderBooks(json)
      })
  })

  function renderBooks(books) {
    const main = document.querySelector('#main')
    books.forEach(book => {
      const h2 = document.createElement('h2')
      h2.innerHTML = book.name
      main.appendChild(h2)
    })
  }
})