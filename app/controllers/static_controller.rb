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
end
