import React from "react";
import { CardFormData } from "../App";

type FormDataProps = {
  formData : CardFormData,
  handleSubmit: (event : React.FormEvent<HTMLFormElement>) =>  void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>  void,
}


const Form: React.FC<FormDataProps> = ({ formData, handleSubmit, handleChange }) => {

  return (
    <section className="w-full pt-20 px-5 pb-10 lg:flex lg:h-screen lg:items-center lg:justify-center">
      <form action="" className="flex flex-col gap-2 lg:w-1/2" onSubmit={handleSubmit}>
        <p className="title">Cardholder name</p>
        <input type="text" placeholder="e.g. Jane Apleseed" className="inputInfo"
        name="cardName"
        value={formData.cardName}
        onChange={handleChange}
        />

        <p className="title">Card number</p>
        <input type="text" placeholder="e.g. 1234 5678 9123 000" className="inputInfo" 
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        />

        <div className="flex gap-3 w-full">
          <div className="w-1/2">
            <p className="title">Exp. date (mm/yy)</p>
            <input type="text" placeholder="MM" className="inputDate w-1/3 mr-2" 
            name="expMonth"
            value={formData.expMonth}
            onChange={handleChange}
            />
            <input type="text" placeholder="YY" className="inputDate w-1/2" 
            name="expYear"
            value={formData.expYear}
            onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <p className="title">CVC</p>
            <input type="text" placeholder="e.g 123" className="inputInfo"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="bg-Very-dark-violet text-white rounded-lg p-3 mt-5">Confirm</button>
      </form>
    </section>
  );
};
export { Form };