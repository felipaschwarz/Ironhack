require_relative "lib/blog.rb"
require_relative "lib/post.rb"

blog = Blog.new
blog.add_post Post.new("Post 1","Text 1")
blog.add_post Post.new("Post 2","Text 2")
#blog.add_post Post.new("Post 3","Text 3")


