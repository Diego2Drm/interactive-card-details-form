import { useState } from "react";
import { Cards } from "./components/Cards"
import { Form } from "./components/Form"
// import Exapmle from "./components/Example";

export interface CardFormData {
  cardName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}


function App() {

  const [formData, setFormData] = useState<CardFormData>({
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  });
  const [showData, setShowData] = useState<boolean>(false);
  const [submitData, setSubmitData] = useState<CardFormData | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, 
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitData(formData);
    setFormData({
      cardName: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvc: '',
    })
    setShowData(true)
    console.log(formData);
  }

  return (
    <section className="lg:flex">
      <Cards formData={submitData} showData={showData} />
      <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
      {/* <Exapmle /> */}
    </section>
  )
}

export default App
