export const capitalize = s => s && (s[0].toUpperCase() + s.slice(1)).replaceAll("_", " ");

export const productInfo = {

	men: {
		
		coverImage: "/assets/men.jpeg",
		productTypes: {

			formal_shirts: {
				coverImage: "/assets/formal_shirts2.jpeg",
				filters: ["None", "Regular", "Slim", "Stretch"],
				searchPlaceholder: "Single Cuff"
			},
			sportswear: {
				coverImage: "/assets/sportswear2.jpeg",
				filters: ["None", "Trainers", "Joggers", "Shorts", "Hoodie"],
				searchPlaceholder: "Nike"
			},
			coats: {
				coverImage: "/assets/coats3.jpeg",
				filters: ["None", "Funnel", "Hooded", "Barbour", "Collar"],
				searchPlaceholder: "Bomber"
			}
		}
	},
	women: {

		coverImage: "/assets/women.jpeg",
		productTypes: {

			jeans: {
				coverImage: "/assets/jeans.jpeg",
				filters: ["None", "Skinny", "Slim", "Boot Cut", "Flare"],
				searchPlaceholder: "Skinny"
			},
			dresses: {
				coverImage: "/assets/dresses3.jpeg",
				filters: ["None", "Short", "Maxi", "Long", "Regular"],
				searchPlaceholder: "Long Sleeve"
			},
			makeup: {
				coverImage: "/assets/makeup2.jpeg",
				filters: ["None", "Mascara", "Lip Gloss", "Foundation", "Blush"],
				searchPlaceholder: "Brush Set"
			}
		}
	},
	home: {

		coverImage: "/assets/home.jpeg",
		productTypes: {

			beds: {
				coverImage: "/assets/beds.jpeg",
				filters: ["None", "Metal", "Ottoman", "Storage", "Wooden"],
				searchPlaceholder: "Upholstered"
			},
			office: {
				coverImage: "/assets/office.jpeg",
				filters: ["None", "Desk", "Chair", "Lamp", "Shelf"],
				searchPlaceholder: "Space Saving"
			},
			coffee_tables: {
				coverImage: "/assets/coffee_table.jpeg",
				filters: ["None", "Wood", "Glass", "Round", "Storage"],
				searchPlaceholder: "Oak Effect"
			}
		}
	},

};

export const productSpecs = {

	dimensions: {

		header: "Dimensions",
		options: [
			{
				label: "Height",
				value: "100cm"
			},
			{
				label: "Width",
				value: "130cm"
			},
			{
				label: "Depth",
				value: "150cm"
			}
		]
	},
	shipping: {

		header: "Shipping",
		options: [
			{
				label: "UK",
				value: "£4.99"
			},
			{
				label: "USA",
				value: "£6.99"
			},
			{
				label: "Gloal",
				value: "£9.99"
			}
		]
	},
	colors: {

		header: "Colors",
		noteColor: true,
		options: [
			{
				label: "Red",
				value: true
			},
			{
				label: "Blue",
				value: false
			},
			{
				label: "Brown",
				value: true
			}
		]
	},
	sizes: {

		header: "Sizes",
		wrapText: true,
		options: [
			{
				label: "Large",
				value: "Check size guide for details"
			},
			{
				label: "Width",
				value: "Check size guide for details"
			},
			{
				label: "Depth",
				value: "Check size guide for details"
			}
		]
	}
};

export const randomCount = () => {

	const max = 273;
	const min = 23;
	return Math.floor(Math.random() * (max - min) + min).toFixed(0);
}