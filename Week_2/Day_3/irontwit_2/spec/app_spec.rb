# spec/app_spec.rb
require File.expand_path '../spec_helper.rb', __FILE__

describe 'The Irontwit' do
	context "homepage" do
		before(:each) { get("/")}

  		it "renders the homepage" do
  			expect(last_response).to be_ok
		end

		it "has a form" do
			expect(last_response.body).to include("form")
		end
	end

	context "logout" do
		it "should set a session as logget out" do
		get("/logout")
		expect(sessoin[:logged_in]).to be_falsey
		end
	end

	context "login" do
		it "should set a session as logget out" do
		get("/login")
		expect(session[:logged_in]).to be_truthy
		end
end
