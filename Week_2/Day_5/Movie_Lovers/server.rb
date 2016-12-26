require 'imdb'
require 'haml'
require 'sinatra'
require 'sinatra/reloader' if development?
require_relative 'lib/movielovers.rb'

set :haml, format: :html5
enable(:sessions)


get('/') do
	erb(:index)
end

post '/search_posters' do
	search = ImdbSearch.new
	session[:searched_movies] = search.posters(params[:word])
	redirect to('/posters')
end

get('/posters') do
	@results = session[:searched_movies]
	erb(:posters)
end

post '/result' do
	
end