class OrderItem < ApplicationRecord
    validates :order_id, presence: true
    validates :menu_item_id, presence: true
    validates :quantity, presence: true

    belongs_to :order
    has_many :menu_items
end
