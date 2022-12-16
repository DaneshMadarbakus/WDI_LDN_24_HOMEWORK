Rails.application.routes.draw do
  scope :api do
    resources :users, except: [:create]
    resources :posts
  end
end
