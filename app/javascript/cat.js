document.addEventListener('DOMContentLoaded', function () {
  fetchCat()
})

function fetchCat() {
  const catApiKey = $('div#api')[0].dataset.apiKey

  $('button#new-cat').on('click', (event) => {
    event.preventDefault()

    $.get({
      url: 'https://api.thecatapi.com/v1/images/search?limit=1',
      api_key: catApiKey
    }).done(response => response)
      .then(json => {
        console.log('json: ', json)
        renderCat(json[0].url)
      })
  })
}

function renderCat(catUrl) {
  let cat = (`
    <div>
      <img src=${catUrl}  class="cat-image" />  
    </div>
  `)
  $('#main').append(cat)
}
