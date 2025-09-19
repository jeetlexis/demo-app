export default {
	async main() {
		Get_user_data.run()
		get_country.run()
		
		// more
	},
	async getGenderRatio() {
		get_gender_ratio_by_country.run()
	}
}