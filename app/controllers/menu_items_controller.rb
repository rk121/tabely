class MenuItemsController < ApplicationController

  # GET /menu_items/1
  def show
      category = Category.find(params[:category_id])
      menu_items = category.menu_items.find_by(id: params[:id])
      render json: menu_items, include: :category
  end

  # POST categories/:category_id/menu_items
  def create
    menu_item = MenuItem.new(menu_item_params)

    if menu_item.save
      render json: menu_item, status: :created
    else
      render json: menu_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menu_items/1
  def update
    menu_item = MenuItem.find_by(id: params[:id])

    if menu_item
      menu_item.update(menu_item_params)
      render json: menu_item
    else
      render json:  { error: "Item not found" }, status: :not_found
    end
  end

  # DELETE /menu_items/1
  def destroy
    category = Category.find(params[:category_id])
    menu_item = category.menu_items.find_by(id: params[:id])

    if menu_item.destroy
      head :no_content
    else
      render json:  { error: "Item not found" }, status: :not_found
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def menu_item_params
      params.permit(:category_id, :name, :price, :out_of_stock)
    end
end
