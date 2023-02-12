class MenuItem < ApplicationRecord
    validates :category_id, presence: true
    validates :name, presence: true
    validates :price, presence: true
    validates :out_of_stock, presence: true

    belongs_to :category
end
