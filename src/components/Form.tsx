
function Form() {
  return (
    <section className="w-full pt-20 px-5 pb-10">
      <form action="" className="flex flex-col gap-2">
        <p className="title">Cardholder name</p>
        <input type="text" placeholder="e.g. Jane Apleseed" className="inputInfo" />

        <p className="title">Card number</p>
        <input type="text" placeholder="e.g. 1234 5678 9123 000" className="inputInfo" />

        <div className="flex gap-3 w-full">
          <div className="w-1/2">
            <p className="title">Exp. date (mm/yy)</p>
            <input type="text" placeholder="MM" className="inputDate w-1/3 mr-2" />
            <input type="text" placeholder="YY" className="inputDate w-1/2" />
          </div>
          <div className="w-1/2">
            <p className="title">CVC</p>
            <input type="text" placeholder="e.g 123" className="inputInfo" />
          </div>
        </div>

        <button type="submit" className="bg-Very-dark-violet text-white rounded-lg p-3 mt-5">Confirm</button>
      </form>
    </section>
  );
};
export { Form };