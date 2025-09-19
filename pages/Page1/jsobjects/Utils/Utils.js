export default {
	downloadDummy(){
		Get_User_100.run({offset: 0, limit: 100})
		showAlert("function called!")
	},
	getCountryOptions() {
		return get_unique_country.data.map(d => ({
			label: d.country,
			value: d.country,
		}))
	},
}