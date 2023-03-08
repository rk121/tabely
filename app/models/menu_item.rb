class MenuItem < ApplicationRecord
    validates :name, presence: true
    validates :price, presence: true

    belongs_to :category
end
