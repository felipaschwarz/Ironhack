class ContactController < ApplicationController
	def new
		render 'new'
	end

  	def create
	    
	    # Create new Contact from params[:contact]
	    if params[:contact][:name].present? && params[:contact][:address].present?
		    @contact = Contact.new(
				:name => params[:contact][:name],
				:address => params[:contact][:address],
				:number => params[:contact][:phone],
				:email => params[:contact][:email])

		   	# Now we save the contact
	    	@contact.save
		    
		    redirect_to("/contacts")
		end

  	end

  	def index
  		@contact = Contact.all.order('name ASC')
  		
  	end

  	def show
  		@contact = Contact.find(params[:id])
  		render 'show'
  	end
end
