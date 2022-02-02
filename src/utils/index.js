export const capitalize = s => s && (s[0].toUpperCase() + s.slice(1)).replaceAll("_", " ");

export const productInfo = {

	men: {
		coverImage: "",
		productTypes: {

			formal_shirts: {
				filters: ["None", "Regular", "Slim", "Stretch"],
				searchPlaceholder: "Single Cuff"
			},
			sportswear: {
				filters: ["None", "Trainers", "Joggers", "Shorts", "Hoodie"],
				searchPlaceholder: "Nike"
			},
			coats: {
				filters: ["None", "Funnel", "Hooded", "Barbour", "Collar"],
				searchPlaceholder: "Bomber"
			}
		}
	},
	women: {

		coverImage: "",
		productTypes: {

			jeans: {
				filters: ["None", "Skinny", "Slim", "Boot Cut", "Flare"],
				searchPlaceholder: "Skinny"
			},
			dresses: {
				filters: ["None", "Short", "Maxi", "Long", "Regular"],
				searchPlaceholder: "Long Sleeve"
			},
			makeup: {
				filters: ["None", "Mascara", "Lip Gloss", "Foundation", "Blush"],
				searchPlaceholder: "Brush Set"
			}
		}
	},
	home: {

		coverImage: "",
		productTypes: {

			beds: {
				filters: ["None", "Metal", "Ottoman", "Storage", "Wooden"],
				searchPlaceholder: "Upholstered"
			},
			office: {
				filters: ["None", "Desk", "Chair", "Lamp", "Shelf"],
				searchPlaceholder: "Space Saving"
			},
			coffee_tables: {
				filters: ["None", "Wood", "Glass", "Round", "Storage"],
				searchPlaceholder: "Oak Effect"
			}
		}
	},

};