document.addEventListener('DOMContentLoaded', function () {
  fetchCat()
})

function fetchCat() {
  // const btnGetCat = document.querySelector('button#new-cat')
  // btnGetCat.addEventListener('click', (event) => {
  $('button#new-cat').on('click', (event) => {
    event.preventDefault()

    $.get({
      url: 'https://api.thecatapi.com/v1/images/search?limit=1',
      api_key: 'ab317b33-666f-46b8-bcc8-f2c54d51941b'
    }).done(response => response)
      .then(json => {
        console.log('json: ', json)
        renderCat(json[0].url)
      })
  })
}

function renderCat(catUrl) {
  const main = document.querySelector('#main')
  const h2 = document.createElement('img')
  let cat = (`
    <div>
      <img src=${catUrl}  class="cat-image" />  
    </div>
  `)

  // $('#main').html(cat)
  $('#main').append(cat)
}
