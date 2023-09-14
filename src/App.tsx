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


  const eventInputOnChange = (event: any) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({
      ...formData, [inputName]: inputValue
    });
  }

  return (
    <>
      <h2>Criação do projeto</h2>
      <div className="card">
        <form>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={eventInputOnChange}
            type="text"
            placeholder='Inform your name'>

          </input>
          <input
            name="profession"
            value={formData.profession}
            onChange={eventInputOnChange}
            type="text"
            placeholder='Inform your profession'>
          </input>
          <input
            name="age"
            value={formData.age}
            onChange={eventInputOnChange}
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
