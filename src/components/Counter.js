import React, { useState } from "react";

export default function Counter() {
  const [count, SetCount] = useState(0);

  const incrementCount = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      <input
        type="number"
        onChange={event => SetCount(parseInt(event.target.value))} // input renvoi une string donc ajouter parseInt sinon l'incrémentation ne fonctionne pas
        placeholder="Pick a number"
      />
      <div>Le compteur est actuellement à {count}</div>

      <button onClick={incrementCount}>+ 1</button>

      <button onClick={() => SetCount(count - 1)}>- 1</button>
    </div>
  );
}
