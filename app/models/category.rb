class Category < ApplicationRecord
    validates :name, presence: true

    has_many :menu_items
end
