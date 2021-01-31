class StaticController < ApplicationController
  def home
  end

  def weather_api
  end

  def thrones_api
  end

  def cat_api
    @api_key = Rails.application.credentials.cat[:api_key]
  end

  def dog_api
  end

  def user_api
  end

  def github
  end

  def github_search_api
    client_id = Rails.application.credentials.git[:client_id]
    client_secret = Rails.application.credentials.git[:client_secret]

    repo = {}
    @repos = []

    @resp = Faraday.get "https://api.github.com/search/repositories" do |req| 
      req.params['client_id'] = client_id
      req.params['client_secret'] = client_secret
      req.params['q'] = params[:query]
      end

    body = JSON.parse(@resp.body)
      if @resp.success?
        @repos = body["items"]
      else
        @error = "errors! oh my!" #body["meta"]["errorDetail"]
      end
      render 'github'
  end

end
