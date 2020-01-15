import React, { useState } from 'react';

import { parseISO, format, addMinutes, addHours, setHours, setMinutes } from 'date-fns';

function App() {
  const [data, setData] = useState(Date());
  const [horaInicial, setHoraInicial] = useState(Date());
  const [horaFinal, setHoraFinal] = useState(Date());

  function handleChangeDate() {
    setHoraInicial(Date())
  }

  return (
    <div className="App">
      <p>{ data }</p>
      <p>{ horaInicial }</p>
      <p>{ horaFinal }</p>
      <p>{ typeof horaFinal }</p>
      <p>{ typeof new Date() }</p>

      <button
        type="button"
        onClick={ handleChangeDate }
      >Change Date for Initial Time</button>

    </div>
  );
}

export default App;
