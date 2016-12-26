require File.expand_path 'spec_helper.rb', __FILE__

RSpec.describe Movies do
	before(:each) do
      movies = Movies.new
    end
	describe ".list" do
		it "return array of 9 searches" do
			movies.list("Hello")
			expect(@list).to arrayWithSize(9)
		end
	end
end
