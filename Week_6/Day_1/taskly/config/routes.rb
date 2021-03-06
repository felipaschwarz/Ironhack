Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			resources :users, except: [:new, :edit] do
				resources :tasks, except: [:new, :edit]
				put 'task/:id/complete', to: 'task#complete'
				patch 'task/:id/complete', to: 'task#complete'
			end
		end
	end
end
