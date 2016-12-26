# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# sandwiches = Sandwich.create([
#   {name: 'Felipatomatas',    bread_type: 'nut'},
#   {name: 'Vincentbacon',    bread_type: 'white'},
#   {name: 'Nikoskaese',  bread_type: 'dark'}
# ])

ingredients = Ingredient.create([
  {name: 'Tomato',    calories: '50'},
  {name: 'Bacon',    calories: '300'},
  {name: 'Cheese',  calories: '200'}
])

