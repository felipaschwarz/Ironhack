Rails.application.routes.draw do
  
  root 'site#home'

  get '/text_inspections/new', to: 'text_inspections#new'

  post "/text_inspections", to: "text_inspections#create"

  get '/placeholder_generator/new', to: 'placeholder_generator#new'

  post '/placeholder_generator', to: 'placeholder_generator#create'

end
