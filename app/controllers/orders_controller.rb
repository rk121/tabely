class OrdersController < ApplicationController

  def show

  end

  # POST /orders
  def create
    order = Order.new(order_params)

    if order.save
      render json: order, status: :created
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    order.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def order_params
      params.permit(:table_id, :order_item_id)
    end
end
