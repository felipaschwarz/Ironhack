# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = Player.create([
  {name: 'Felipa'},
  {name: 'Vincent'},
  {name: 'Nikos'},
  {name: 'Mary'},
])



matches = Match.create([
  {winner_faction: 'zerg', loser_faction: 'terran', duration: '1', winner_id: players[0].id, loser_id: players[1].id},
  {winner_faction: 'protoss', loser_faction: 'zerg', duration: '3', winner_id: players[0].id, loser_id: players[3].id},
  {winner_faction: 'protoss', loser_faction: 'terran', duration: '2', winner_id: players[1].id, loser_id: players[2].id},
  {winner_faction: 'zerg', loser_faction: 'protoss', duration: '3', winner_id: players[1].id, loser_id: players[0].id},
  {winner_faction: 'terran', loser_faction: 'zerg', duration: '1', winner_id: players[2].id, loser_id: players[1].id},
  {winner_faction: 'zerg', loser_faction: 'terran', duration: '4', winner_id: players[2].id, loser_id: players[3].id},
  {winner_faction: 'terran', loser_faction: 'zerg', duration: '4', winner_id: players[3].id, loser_id: players[2].id},
  {winner_faction: 'protoss', loser_faction: 'zerg', duration: '4', winner_id: players[3].id, loser_id: players[0].id}
])