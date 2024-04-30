import { useState } from "react";
import Title from './components/Title';
import Counter from './components/Counter';
import fundo from './assets/fundo.jpg';
import useCountdown from "./hook/useCountdown";
import './App.css';

function App() {
  // Estado para armazenar a data e hora selecionadas pelo usuário
  const [selectedDate, setSelectedDate] = useState('');

  // Obter o tempo atual para iniciar a contagem regressiva
  const currentDate = new Date().getTime();

  // Hook useCountdown para calcular a contagem regressiva
  const { days, hours, minutes, seconds } = useCountdown(selectedDate ? new Date(selectedDate).getTime() : currentDate);

  // Função para lidar com a mudança de data selecionada pelo usuário
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className='app' style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container"> 
        <Title title='Contagem regressiva para o bebê chegar!' /> 
        <div className="countdown-container">
          {/* Input para o usuário selecionar a data */}
          <input type="datetime-local" value={selectedDate} onChange={handleDateChange} />
          {/* Exibir contagem regressiva apenas se a data for selecionada */}
          {selectedDate && (
            <>
              <Counter title="Dias" number={days}/>
              <Counter title="Horas" number={hours}/>
              <Counter title="Minutos" number={minutes}/>
              <Counter title="Segundos" number={seconds}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;












