class TextInspectionsController < ApplicationController
	def new
		render 'new'
	end

	def create
    	# render plain: params.inspect
    	# render plain: params[:text_inspection].inspect
    	# render plain: params[:text_inspection][:user_text]

    	@text = params[:text_inspection][:user_text]
    	@text_array = @text.split(" ")
	    @word_count = @text_array.length.to_f
	    @reading_time = @word_count / 275 * 60
	    @frequency = @text_array.each_with_object(Hash.new{|i|0}){|w,h| h[w.downcase]+=1}.sort_by{ |k, v| v }.reverse
	    


	    # render plain: @word_count
	    render 'results'
  	end
end
