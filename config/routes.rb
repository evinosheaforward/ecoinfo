Rails.application.routes.draw do
  root 'homes#index'
  get 'Home' => 'homes#index'
  get 'About' => 'homes#about'
  get 'Projects' => 'homes#projects'
  get 'Skills' => 'homes#skills'
  get 'Review' => 'visitor_data#new'
  get 'Reviews' => 'visitor_data#index'
  #get 'visitor_data#delete'
  resources :homes
  resources :views
  resources :visitor_data
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
