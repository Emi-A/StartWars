import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Planetas } from "../component/planetas.js";
import { Personajes } from "../component/personajes.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.dataPeople();
		actions.dataPlanetas();
	}, []);
	return (
		<div>
			<h1 className="text-white">PERSONAJES</h1>
			<div className="container">
				<div className="align-items-center text-center">
					<div style={{ overflow: "auto" }}>
						<div className="row">
							<div className="d-flex">
								{store.people.map((people, i) => {
									return (
										<div key={i}>
											<Personajes
												nombre={people.name}
												hair_color={people.hair_color}
												gender={people.gender}
												eyes_color={people.eye_color}
												id={i}
											/>
										</div>
									);
								})}
								;
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<h1 className="text-white">PLANETAS</h1>
			<div className="container">
				<div className="align-items-center text-center">
					<div style={{ overflow: "auto" }}>
						<div className="row">
							<div className="d-flex">
								{store.planets.map((planet, i) => {
									return (
										<div key={i}>
											<Planetas
												nombre={planet.name}
												population={planet.population}
												terrain={planet.terrain}
												id={i}
											/>
										</div>
									);
								})}
								;
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
