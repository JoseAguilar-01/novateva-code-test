import AtributosFormulario from './components/Atributos/AtributosFormulario';
import DatosPrincipalesForm from './components/DatosPrincipalesForm/DatosPrincipalesForm';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="app">
			<Header />
			<DatosPrincipalesForm />
			<AtributosFormulario />
		</div>
	);
}

export default App;
