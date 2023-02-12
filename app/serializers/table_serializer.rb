class TableSerializer < ActiveModel::Serializer
  attributes :id, :table_url

  has_many :orders
end
