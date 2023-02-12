class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :menu_item_id, :quantity

  belongs_to :order
end
