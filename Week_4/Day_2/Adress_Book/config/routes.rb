Rails.application.routes.draw do

	get '/', to: 'contact#new'

	post '/contacts', to: 'contact#create'

	get '/contacts', to: 'contact#index'

	get "/contacts/:id", to: "contact#show"
end

