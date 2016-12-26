class UsersController < ApplicationController
	before_action :set_user

	def index
		@users = User.all.order(name: :asc)
	end

	def new
		@user = User.new
	end

	def show
	end

	def create
		@user = User.new(
			name: params[:user][:name],
			email: params[:user][:email])
		@user.save
		redirect_to users_path, flash: { success: 'User was successfully created.' }
	end

	def destroy
		@user.destroy
		redirect_to users_path, flash: { success: 'User was successfully deleted.' }
	end

	private

	def set_user
		@user = User.find_by(id: params[:id])
	end
end
