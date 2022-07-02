import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetails(props) {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`/api/cruds/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/cruds/${_id}`);
			navigate("/cruds");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<h2>{crud.carName}</h2>

			<p>
				<b>Registration Number</b>: <a href={`tel:+${crud.reg}`}> {crud.reg} </a>
			</p>

			<p>
				<b>Car Color</b>: {crud.carColor}
			</p>
			<p>
				<b>Type</b>: {crud.type}
			</p>
			<p>
				<b>Link</b> :
				<a href={` ${crud.showroom}`} target="_blank" rel="noreferrer">
					{crud.showroom}
				</a>
			</p>
			<p>
				<b>Description</b>: <p align="justify">{crud.description}</p>
			</p>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/cruds" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default CrudDetails;
