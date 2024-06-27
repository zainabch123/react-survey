export default function Checkboxes({ formAnswers, setFormAnswers }) {
  function handleInput(event) {
    console.log("event", event.target);
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
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}