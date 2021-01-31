class Sushi


  def initialize
    # response = Faraday.get 'http://sushi.com/nigiri/sake.json'
    
    resp = Faraday.get('http://sushi.com/search') do |req|
      req.params['limit'] = 100
      req.headers['Content-Type'] = 'application/json'
      req.body = {query: 'salmon'}.to_json
    end
  
    binding.pry
    
  end
end