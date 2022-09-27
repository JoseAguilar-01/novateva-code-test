import './DatosPrincipalesForm.css';

const DatosPrincipalesForm = () => {
	return (
		<div className="datos-principales">
			<form className="datos-principales_form">
				<div className="form_input-nombre">
					<label className="input-nombre_titulo">Nombre</label>
					<input
						type="text"
						name="nombre"
						className="input-nombre_campo"
					/>
				</div>
				<div className="form_input-descripcion">
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
