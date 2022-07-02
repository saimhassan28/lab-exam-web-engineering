import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CrudEdit(props) {
	const initialState = {
		carName: "",
		reg: "",
		carColor: "",
		type: "",
		showroom: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`/api/cruds/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCrud() {
			try {
				await patch(`/api/cruds/${crud._id}`, crud);
				navigate(`/cruds/${crud._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/cruds/${crud._id}`);
	}

	return (
		<div className="container">
			<h1>Edit {crud.carName}</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Car Name</label>
					<input
						name="carName"
						type="text"
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
					<small>Format: 251-XXX-XXXXXX</small>
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
						type="url"
						value={crud.showroom}
						onChange={handleChange}
						className="form-control"
					/>
					
				</div>

				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="5"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="btn-group">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
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

export default CrudEdit;
