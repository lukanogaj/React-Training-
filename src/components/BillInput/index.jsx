const BillInput = () => {
	return (
		<div>
			<label htmlFor="">How much was the bill</label>
			<input type="text" placeholder="Bill value" value={bill} />
		</div>
	);
};

export default BillInput;
