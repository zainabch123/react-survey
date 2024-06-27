import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formAnswers, setFormAnswers] = useState({
    username: "",
    colour: "",
    timeSpent: [],
    review: "",
    email: ""
  });

  const [answersList, setAnswersList] = useState([]);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList
          answersList={answersList}
          setAnswersList={setAnswersList}
        />
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <Form
          formAnswers={formAnswers}
          setFormAnswers={setFormAnswers}
          answersList={answersList}
          setAnswersList={setAnswersList}
        />
      </section>
    </main>
  );
}

export default Survey;
