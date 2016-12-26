require 'spec_helper'

RSpec.describe Post do
	describe ".initialize" do
		before(:all) {@post1 = Post.new("Post 1","Text 1")}
	    puts @post1.class
	    it "should return title of post" do
	      	expect(@post1.title).to eq("Post 1")
	    end

	    it "should return text of post" do
	      	expect(@post1.text).to eq("Text 1")
	    end
	end
end
