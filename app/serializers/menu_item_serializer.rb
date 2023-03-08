class MenuItemSerializer < ActiveModel::Serializer
  attributes :category_id, :id, :name, :price, :out_of_stock

  belongs_to :category
end
