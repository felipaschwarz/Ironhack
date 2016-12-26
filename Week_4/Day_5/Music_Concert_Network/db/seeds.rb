1.upto(10).each do |c|
	concert = Concert.create!(
		artist: "#{c}.Artist",
		venue: "Venue #{c}",
		city: "City #{c}",
		date: "#{rand(1..30)}/#{rand(1..12)}/#{rand(16..20)}",
		price: "#{c * 100}",
		description: "This is the #{c}. Concert")
end