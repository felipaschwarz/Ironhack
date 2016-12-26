class CommentsController < ApplicationController

	def new
		@concert = Concert.new
	end

	def create
		@concert = Concert.new(
			artist: params[:concert][:artist],
			venue: params[:concert][:venue],
			city: params[:concert][:city],
			date: params[:concert][:date],
			price: params[:concert][:price],
			description: params[:concert][:description])

		@concert.save
		redirect_to concerts_path, flash: { success: 'Concert was successfully created.' }
	end
end
