require 'sinatra'
require 'haml'
require 'pry'
require "sinatra/reloader" if development?
require_relative 'lib/user.rb'

set :haml, format: :html5
enable(:sessions)

@@users = []


get '/' do
  erb(:index)
end

post '/register' do
	@user = User.new(params[:username], params[:password])
	@@users << @user
	session[:logged_in] = true
	redirect to('/profile')
end

post '/log_in' do
	valid = @@users.find {|user| user.name == (params[:username] && user.password == params[:password])}
	if valid
		session[:logged_in] = true
		redirect to('/profile')
	else
		@error = "Not found" #not displayed why?
		redirect to ("/")
	end
end

get '/profile' do
  @twits = []
  erb(:profile)
end

get "/logout" do
  session[:logged_in] = false
  redirect to("/")
end
