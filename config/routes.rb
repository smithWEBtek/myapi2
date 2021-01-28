Rails.application.routes.draw do
  get 'static/home'
  resources :dogs
  resources :cats
  resources :users
  
  get '/weather_api', to: 'static#weather_api'
  get '/thrones_api', to: 'static#thrones_api'
  get '/cat_api', to: 'static#cat_api'
  root to: 'static#home'
end
