import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		carName: "",
		reg: "",
		carColor: "",
		type: "",
		showroom: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.carName || !crud.carColor) return;
		async function postCrud() {
			try {
				const response = await post("/api/cruds/", crud);
				navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create CRUD</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Car Name</label>
					<input
						name="carName"
						type="text"
						required
						value={crud.carName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Registration Number</label>
					<input
						name="reg"
						type="tel"
						required
						value={crud.reg}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: ABC-123</small>
				</div>
				<div className="form-group">
					<label>Car Color</label>
					<input
						name="carColor"
						type="text"
						required
						value={crud.carColor}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Type</label>
					<input
						name="type"
						type="text"
						required
						value={crud.type}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Showroom</label>
					<input
						name="showroom"
						type="text"
						value={crud.showroom}
						onChange={handleChange}
						className="form-control"
					/>
					
				</div>

				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="10"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudAdd;
