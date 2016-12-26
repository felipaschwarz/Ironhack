class MatchesController < ApplicationController
	def index
		matches = Match.where("winner_id=?", params[:player_id])
        render json: matches
	end

	def show_faction
		matches = Match.where("loser_faction=?" || "winner_faction=?", params[:faction])
		percentage = "#{Match.where("winner_faction=?", params[:faction]).length.to_f / Match.all.length * 100}%"

        render json: {matches: matches, percentage: percentage}
	end
end
