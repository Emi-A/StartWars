import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonajesViews = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	let info = store.people[params.theid];
	return (
		<div className="container text-center mt-4">
			<div className="card mb-3" style={{ width: "940px", height: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="...." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{info.name}</h5>
							<p className="card-text p-4">
								Existen dos grupos de humanos que son sensibles a la Fuerza pero que poseen ideologías
								diferentes entre sí: los Jedi y los Sith. La estructura jerárquica de la orden Jedi
								incluye a los maestros, como Obi-Wan Kenobi, Luke Skywalker y Yoda; sus aprendices o
								también conocidos como padawan; los iniciados o younglings que suelen ser menores de
								edad; y los caballeros, cuyo estatus progresa al de un maestro una vez que concluyen el
								entrenamiento de su respectivo aprendiz. Además de los anteriores, existen otros tipos
								de Jedi que persiguen fines específicos: por ejemplo, los guardianes, los centinelas y
								los consulares.
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="row align-items-center" style={{ color: "red" }}>
				<div className="col">Name: {info.name}</div>
				<div className="col">Birth year {info.birth_year}</div>
				<div className="col"> Gender: {info.gender}</div>
				<div className="col"> Height {info.height}</div>
				<div className="col"> Skin color: {info.skin_color}</div>
				<div className="col">Eyes color: {info.eye_color}</div>
			</div>
		</div>
	);
};
