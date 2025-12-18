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
					<h3 className="text-center mt-3"><strong>Mi lista de cosas necesarias</strong></h3>
					<div className="input-group p-3">
						<input value={cosas} onChange={(e) => setCosas(e.target.value)} type="text" className="form-control" placeholder="Solo lo necesario" onKeyUp={enviar} />
						<button className="btn btn-ligth" onClick={agregarCosa}> Agregar 🛒</button>
					</div>
					<div className="container" style={{
						maxHeight: "30em",
						overflowY: "auto",
						lineHeight: "1.5em",
						textOverflow: "clip",
						whiteSpace: "normal",
					}}>
						{
							listaCosas.map((lista, index) => (
								<div className="d-flex justify-content-between" key={index}>
									<p>✅ {lista}</p>
									<button className="btn d-flex justify-content-start" onClick={() => eliminarCosas(index)}>
										❌
									</button>
								</div>
							))
						}
					</div>

				</div>
			</div>


		</>
	);
};

export default Home;