class CreateMenuItems < ActiveRecord::Migration[7.0]
  def change
    create_table :menu_items do |t|
      t.integer :category_id
      t.string :name
      t.decimal :price
      t.boolean :out_of_stock

      t.timestamps
    end
  end
end
