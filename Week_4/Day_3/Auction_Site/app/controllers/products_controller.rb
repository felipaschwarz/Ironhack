class ProductsController < ApplicationController
	
	def show
		@products = Product.all.order(title: :asc)
	end

	def create
		@user = User.find_by(id: params[:user_id])
		@product = @user.Product.new(entry_params)

		if @product.save
			redirect_to @product, flash: { success: "Product has been saved successfully."}
	    else
			render 'new', flash: { success: "Product has not been saved."}
		redirect_to "/projects/#{@project.id}/time_entries"
	end

	def destroy
		@user.destroy
		redirect_to user_path, flash: { success: 'Product was successfully deleted.' }
	end

	private

	def entry_params
    	params.require(:product).permit(:title, :description, :deadline)
	end
end
