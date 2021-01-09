Rails.application.routes.draw do
  get 'static/home'
  resources :dogs
  resources :cats
  resources :users
  resources :forecasts
  root to: 'static#home'
end
