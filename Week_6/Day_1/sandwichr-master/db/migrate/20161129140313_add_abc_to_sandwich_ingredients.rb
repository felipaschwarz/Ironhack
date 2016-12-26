class AddAbcToSandwichIngredients < ActiveRecord::Migration[5.0]
  def change
    add_reference :sandwich_ingredients, :ingredient, foreign_key: true
  end
end
