class PlayersController < ApplicationController
	def index
		matches = Match.where("winner_id=?" || "loser_id=?", params[:player_id])
		win_ perc = Match.where("winner_id=?" || "loser_id=?", params[:player_id]) / matches.length
		lose_perc =
        render json: {matches: matches, win_perc: win_perc, lose_perc: lose_perc}
	end
end
