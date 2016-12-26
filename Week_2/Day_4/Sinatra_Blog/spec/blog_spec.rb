require 'spec_helper'

RSpec.describe Blog do
	describe ".posts" do
	    it "should return an array of posts added" do
	    	@blog = Blog.new
			@blog.add_post Post.new("Post 1","Text 1")
			@blog.add_post Post.new("Post 2","Text 2")
	      	expect(@blog.posts).to match_array()
	    end
	end
end
