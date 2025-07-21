import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AdviceOracle from './modes/AdviceOracle';
import ModeWrapper from './components/ModeWrapper';

const modes = {
  "advice": <AdviceOracle />,
  // other modes to come
};

function App() {
  const [activeMode, setActiveMode] = useState("advice");

  return (
    <div className="flex min-h-screen">
      <Sidebar setActiveMode={setActiveMode} />
      <main className="flex-1 p-6 flex justify-center items-center">
        <ModeWrapper>{modes[activeMode]}</ModeWrapper>
      </main>
    </div>
  );
}

export default App;
