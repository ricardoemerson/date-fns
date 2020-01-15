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

      <p><a href="https://blog.rocketseat.com.br/datas-e-horarios-javascript-date-fns-moment/">https://blog.rocketseat.com.br/datas-e-horarios-javascript-date-fns-moment/</a></p>
      <p><a href="https://javascript-conference.com/blog/why-you-should-use-date-fns-for-manipulating-dates-with-javascript/">https://javascript-conference.com/blog/why-you-should-use-date-fns-for-manipulating-dates-with-javascript/</a></p>
      <p><a href="https://dev.to/marinamosti/-formatting-and-modifying-javascript-dates-with-date-fns-3df2">https://dev.to/marinamosti/-formatting-and-modifying-javascript-dates-with-date-fns-3df2</a></p>
      <p><a href="https://medium.com/@billys.moustakas/node-js-date-fns-good-date-handling-in-javascript-d78710c66fe0">https://medium.com/@billys.moustakas/node-js-date-fns-good-date-handling-in-javascript-d78710c66fe0</a></p>

    </div>
  );
}

export default App;
