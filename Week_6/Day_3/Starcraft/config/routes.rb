Rails.application.routes.draw do
	get '/players/:player_id', to: 'players#index'
	get '/players/:player_id/matches', to: 'matches#index'
	get '/matches/:faction', to: 'matches#show_faction'
end
