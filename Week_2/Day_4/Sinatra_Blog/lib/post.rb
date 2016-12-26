require_relative 'blog.rb'

class Post
	attr_accessor :title, :text, :date

	def initialize(title, text)
		@title = title
		@text = text
		@date = Time.now
	end
end
