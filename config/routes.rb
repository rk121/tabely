Rails.application.routes.draw do
  # tables/:table_id/order/:order_id
  resources :tables do
    resources :orders, only:[:create, :destroy]
  end

  resources :order_items
  resources :menu_items
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
