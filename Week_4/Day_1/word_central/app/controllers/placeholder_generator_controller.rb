class PlaceholderGeneratorController < ApplicationController
	def new
		render 'new'
	end

	def create
    	@number = params[:placeholder_generator][:user_number].to_i
    	
    	@text = @number * '' 

    	# if name option has value words: sonst 

	    render 'result'
  	end
end
