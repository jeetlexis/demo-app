export default {

	async update_user () {
		const selectedRow = User_Table.selectedRowIndex
		await update_user_data.run()
		await Get_user_data.run()
		User_Table.setSelectedRowIndex(selectedRow)
	}
}