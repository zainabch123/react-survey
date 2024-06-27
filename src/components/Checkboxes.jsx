export default function Checkboxes({ formAnswers, setFormAnswers }) {
  function handleInput(event) {
    console.log("event", event.target);
    console.log("event checked?", event.target.checked);
    setFormAnswers({ ...formAnswers, timeSpent: event.target.value });
  }

  return (
    <ul>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="swimming"
            onChange={handleInput}
            checked={formAnswers.timeSpent === "swimming"}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="bathing"
            onChange={handleInput}
            checked={formAnswers.timeSpent === "bathing"}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="chatting"
            onChange={handleInput}
            checked={formAnswers.timeSpent === "chatting"}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="noTime"
            onChange={handleInput}
            checked={formAnswers.timeSpent === "noTime"}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}
