class OrderItemsController < ApplicationController
  # GET /order_items
  def index
    table = Table.find(params[:table_id])
    order = table.orders.find(params[:order_id])
    order_items = order.order_items

    render json: order_items
  end

  # POST /order_items
  def create
    order_item = OrderItem.new(order_item_params)

    if order_item.save
      render json: order_item, status: :created
    else
      render json: order_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_items/1
  def update
    if order_item.update(order_item_params)
      render json: order_item
    else
      render json: order_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_items/1
  def destroy
    order_item.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def order_item_params
      params.permit(:order_id, :menu_item_id, :quantity)
    end
end
