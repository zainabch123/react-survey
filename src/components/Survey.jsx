import { useState } from "react";
import Form from "./Form";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formAnswers, setFormAnswers] = useState({
    username: "",
    colour: "",
    timeSpent: "",
    review: "",
    email: ""
  });

  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>

        {/* answers should go here */}
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <Form formAnswers = {formAnswers} setFormAnswers={setFormAnswers}/>
      </section>
    </main>
  );
}

export default Survey;
