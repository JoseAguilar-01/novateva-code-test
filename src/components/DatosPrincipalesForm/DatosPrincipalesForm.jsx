import './DatosPrincipalesForm.css';

const DatosPrincipalesForm = () => {
	return (
		<div className="datos">
			<form className="datos_form">
				<div className="datos_form_nombre">
					<label className="input-nombre_titulo">Nombre</label>
					<input
						type="text"
						name="nombre"
						className="input-nombre_campo"
					/>
				</div>
				<div className="datos_form_descripcion">
					<label className="input-descripcion_titulo">Descripción</label>
					<input
						type="text"
						name="descripcion"
						className="input-descripcion_campo"
					/>
				</div>
			</form>
		</div>
	);
};

export default DatosPrincipalesForm;
