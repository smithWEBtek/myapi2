class CatApi

  def initialize
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(resp => resp.json())
      .then(json => console.log(json));
  
  end
end