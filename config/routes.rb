Rails.application.routes.draw do
  get 'static/home'
  resources :dogs
  resources :cats
  resources :users
  get '/weather', to: 'static#weather'

  root to: 'static#home'
end
