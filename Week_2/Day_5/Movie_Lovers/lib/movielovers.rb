require 'imdb'
require'pry'

class Movie
	attr_reader :title, :poster
	def initialize(title, poster, release_date)
		@title = title
		@poster = poster
		@release_date = release_date
	end
end

class ImdbSearch
	attr_reader :array_movies
	def initialize
		@array_movies = []	
	end

	def posters(search)
		results = Imdb::Search.new(search)
		i = 0
		while @array_movies.length < 9	
				@array_movies << Movie.new(results.movies[i].title, results.movies[i].poster, results.movies[i].release_date) unless results.movies[i].poster.nil?
			i += 1
		end
		 @array_movies
	end
end