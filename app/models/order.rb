class Order < ApplicationRecord
    belongs_to :table
    has_many :order_items
end
