class AddSandwichesToSandwichIngredients < ActiveRecord::Migration[5.0]
  def change
    add_reference :sandwich_ingredients, :sandwich, foreign_key: true
  end
end
