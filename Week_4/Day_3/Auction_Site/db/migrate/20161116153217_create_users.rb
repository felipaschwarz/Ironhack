class CreateUsers < ActiveRecord::Migration[5.0]
	validates :name, format: { with: /\[a-zA-Z]/}
	validates :email, presence: true, uniqueness: true

  	def change
    	create_table :users do |t|
			t.string :name
			t.string :email

			t.timestamps
    end
  end
end
