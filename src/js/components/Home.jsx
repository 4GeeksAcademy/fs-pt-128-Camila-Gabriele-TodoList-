import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [listaCosas, setListaCosas] = useState([])
	const [cosas, setCosas] = useState("")

	const agregarCosa = () => {
		if (cosas.trim() == "") {
			alert("Hay campos sin completar")
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
		const nuevaLista = listaCosas.filter (listaCosas,index => index !== indexAEliminar);
		setListaCosas(nuevaLista);

	}

	return (
		<>
			<div className="input-group p-3">
				<input value={cosas} onChange={(e) => setCosas(e.target.value)} type="text" class="form-control" placeholder="Solo lo necesario" onKeyUp={enviar} />
				<button className="btn btn-dark" onClick={agregarCosa}> Agregar </button>
			</div>
			<div className="container">
				{
					listaCosas.map((lista, index) => (
						<div key={index}>
							<p>✔️{lista}</p>
							<button onClick={() => eliminarCosas(index)}>
								❌ 
							</button>
						</div>
					))
				}
			</div>


		</>
	);
};

export default Home;