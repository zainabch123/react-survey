export default function Checkboxes() {
    return (
      <ul>
        <li>
          <label>
            <input name="spend-time" type="checkbox" value="swimming" />
            Swimming
          </label>
        </li>
        <li>
          <label>
            <input name="spend-time" type="checkbox" value="bathing" />
            Bathing
          </label>
        </li>
        <li>
          <label>
            <input name="spend-time" type="checkbox" value="chatting" />
            Chatting
          </label>
        </li>
        <li>
          <label>
            <input name="spend-time" type="checkbox" value="noTime" />I don't
            like to spend time with it
          </label>
        </li>
      </ul>
    );
}