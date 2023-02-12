class Order < ApplicationRecord
    validates :table_id, presence: true

    belongs_to :table
    has_many :order_items
end
