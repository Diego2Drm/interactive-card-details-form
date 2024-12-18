import { useState } from "react";
import { Cards } from "./components/Cards"
import { Form } from "./components/Form"
import { ThankYou } from "./components/ThankYou";
// import Exapmle from "./components/Example";

export interface CardFormData {
  cardName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}
export interface CardFormDataErrors {
  cardName?: string;
  cardNumber?: string;
  expMonth?: string;
  expYear?: string;
  cvc?: string;
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
  const [errors, setErrors] = useState<CardFormDataErrors>({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if ((name === 'cvc' || name === 'expYear' || name === 'expMonth' || name === 'cardNumber') && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: CardFormDataErrors = {};
    if (!formData.cardName || !/^[a-zA-Z\s]*$/.test(formData.cardName)) {
      newErrors.cardName = "Can't be blank and must contain only letters";
    }
    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
      newErrors.cardNumber = "Can't be blank and must be 16 digits"
    }
    if (!formData.expMonth || formData.expMonth.length !== 2) {
      newErrors.expMonth = "Can't be blank and must be 2 digits"
    }
    if (!formData.expYear || formData.expYear.length !== 2) {
      newErrors.expYear = "Can't be blank and must be 2 digits"
    }
    if (!formData.cvc || formData.cvc.length !== 3) {
      newErrors.cvc = "Can't be blank and must be 3 digits"
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitData(formData);
    setFormData({
      cardName: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvc: '',
    })
    setShowData(true);
    setErrors({});
    console.log(formData);
  }

  const handleReset = () => {
    setFormData({
      cardName: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvc: '',
    });
    setShowData(false);
    setSubmitData(null)
  }
  return (
    <section className="lg:flex">
      <Cards formData={submitData} showData={showData} />
      {
        submitData ?
          <ThankYou handleReset={handleReset}/> :
          <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
      }
      {/* <Exapmle /> */}
    </section>
  )
}

export default App
