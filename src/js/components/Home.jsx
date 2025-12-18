import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [listaCosas, setListaCosas] = useState([])
	const [cosas, setCosas] = useState("")

	const agregarCosa = () => {
		if (cosas.trim() == "") {
			alert("No necesitas nada?")
		}
		setListaCosas([...listaCosas, cosas])
		setCosas("")
	}
	const enviar = (e) => {
		if (e.key == "Enter") {
			agregarCosa()
		}
	}
	const eliminarCosas = (indexAEliminar) => {
		const nuevaLista = listaCosas.filter((item, index) => index !== indexAEliminar);
		setListaCosas(nuevaLista);

	}

	return (
		<>
			<div class="" >
				<div class="rounded" >
					<h3 className="text-center mt-3"><strong> ¿Que necesito? </strong></h3>
					<div className="input-group p-3">
						<input value={cosas} onChange={(e) => setCosas(e.target.value)} type="text" className="form-control" placeholder="Lo necesario . . ." onKeyUp={enviar} />
						<button className="btn btn-ligth border border-dark" onClick={agregarCosa}> Agregar 🛒</button>
					</div>
					<div className="container" style={{
						maxHeight: "30em",
						overflowY: "auto",
						lineHeight: "1.5em",
						textOverflow: "clip",
						whiteSpace: "normal",
					}}>
						{listaCosas.length > 0 ? (
							listaCosas.map((lista, index) => (
								<div className="lista d-flex justify-content-between" key={index}>
									<p> <i class="fa-solid fa-check-double"></i> {lista}</p>
									<button className="borrar btn d-flex justify-content-start" onClick={() => eliminarCosas(index)}>
										<i class="fa-solid fa-trash"></i>
									</button>
								</div>
							))
						) : (
							<div className="text-center mt-3">
									<p>No hay tareas, añadir tareas</p>
							</div>
						)
						}
					</div>

				</div>
			</div >


		</>
	);
};

export default Home;