Rails.application.routes.draw do
  # tables/:table_id/order/:order_id
  resources :tables do
    resources :orders, only: [:show, :create, :destroy, :update] do
      resources :order_items, only: [:index, :create, :update, :destroy]
    end
  end
  
  resources :menu_items, only: [:update]
  
  # categories/:category_id/menu_items
  resources :categories do
    resources :menu_items, only: [:show, :create, :destroy]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
