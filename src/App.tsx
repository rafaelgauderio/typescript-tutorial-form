import { useState } from 'react';
import './App.css';

type FormData = {
  firstName: string;
  profession: string;
  age: number;
}

function App() {

  // useState para associnar o tipo de dados com input dos formulario
  const [formData, setFormData] = useState<FormData>({
    // mão iniciar formulario como nulo e sim com os objetos vazios 
    firstName: '',
    profession: '',
    age: 0
  });

  const eventOnChangeFirstName = (evento: any) => {
    setFormData({ ...formData, firstName: evento.target.value })
  }

  function eventOnChangeProfession (evento: any) {
    setFormData({ ...formData, profession: evento.target.value })
  }

  function eventOnChangeAge (event: any) {
    setFormData({...formData, age: event.target.value})
  }

  return (
    <>
      <h2>Criação do projeto</h2>
      <div className="card">
        <form>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={eventOnChangeFirstName}
            type="text"
            placeholder='Inform your name'>

          </input>
          <input
            name="profession"
            value={formData.profession}
            onChange={eventOnChangeProfession}
            type="text"
            placeholder='Inform your profession'>
          </input>
          <input
            name="age"
            value={formData.age}
            onChange={eventOnChangeAge}
            type="number"
            placeholder='Inform your age'>
          </input>
          <button>Show all form data </button>
        </form>
      </div>
    </>
  )
}

export default App
