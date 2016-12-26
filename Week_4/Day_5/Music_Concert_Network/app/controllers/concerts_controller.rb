class ConcertsController < ApplicationController
	
	def index
		@concerts_today = Concert.where(date: Date.today)
		@concerts_month = Concert.where(date: Time.now.beginning_of_month..Time.now.end_of_month)
	end

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

	def show
		@concert = Concert.find_by(id: params[:id])
		unless @concert
			render 'no_concert_found'
		end
	end



end
