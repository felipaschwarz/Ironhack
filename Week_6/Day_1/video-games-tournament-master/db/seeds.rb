# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Tournament.create(name: "Roland Garros")
Tournament.create(name: "Wimbledon")
Player.create(name: "Carlos")
Player.create(name: "Johnny")
Player.create(name: "Felipa")
Registration.create(player_id: 1, tournament_id: 1)
Registration.create(player_id: 2, tournament_id: 1)
Registration.create(player_id: 2, tournament_id: 2)