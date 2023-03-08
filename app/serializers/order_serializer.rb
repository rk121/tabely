class OrderSerializer < ActiveModel::Serializer
  attributes :id, :table_id, :created_at

  has_many :order_items
  belongs_to :table
end
