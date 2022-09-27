import './AtributosFormulario.css';

const AtributosFormulario = () => {
	return (
		<div className="atributos">
			<h2 className="atributos_titulo">Atributos</h2>
			<div>
				<table className="atributos_tabla">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Tipo</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>ID</td>
							<td>
								<form>
									<select>
										<option value="decimal">DECIMAL</option>
										<option value="entero">ENTERO</option>
									</select>
								</form>
							</td>
							<td>Atributo</td>
						</tr>
						<tr>
							<td>Celular</td>
							<td>
								<form>
									<select>
										<option value="decimal">CHAR</option>
									</select>
								</form>
							</td>
							<td>Atributo</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AtributosFormulario;
