require_relative 'post.rb'

class Blog
	def initialize
		@list_of_posts = []
	end

	def add_post(post)
		@list_of_posts << post
	end

	def posts
		@list_of_posts
	end

	def latest_posts
		@list_of_posts.sort {|post1, post2| post2.date <=> post1.date}
	end

end