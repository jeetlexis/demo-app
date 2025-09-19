export default {

	myFun1 () {
		get_country.run().then(dt =>{
			showAlert("" + dt[0].country)
		})
		showAlert("hi")
	},
	async newFun () {
		const coutry = await get_country.run()
		await showAlert("" + coutry[0].country)
		await showAlert("HI")
	},
		async newFunc() {
	let resp = await get_country.run()
	const country = resp[0].country
	let count = await get_user_count_by_country.run({ country })
	return count
	},
}
