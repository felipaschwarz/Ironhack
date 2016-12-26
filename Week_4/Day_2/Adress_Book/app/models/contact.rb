class Contact < ApplicationRecord
	def self.name_validate(name)
		name.present? ? true : false
	end

	def self.address_validate(address)
		address.present? ? true : false
	end

	def self.number_validate(name)
		number.present? ? true : false
	end
end
