import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList, setAnswersList}) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
