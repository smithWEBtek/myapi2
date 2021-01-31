$(() => {

  $('button#new-cat').on('click', () => {
    let catApiKey = $('div#api')[0].dataset.apiKey

    $.get({
      url: 'https://api.thecatapi.com/v1/images/search?limit=1',
      api_key: catApiKey
    }).done(response => response)
      .then(json => {
        console.log('json: ', json)
        renderCat(json[0].url)
      })
  })

  function renderCat(catUrl) {
    let cat = (`
    <div class="cats-image">
    <img src=${catUrl} />  
    </div>
    `)
    $('div.cats').append(cat)
  }
})
