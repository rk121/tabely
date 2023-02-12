class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :out_of_stock

  belongs_to :category
end
