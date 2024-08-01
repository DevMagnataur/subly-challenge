import { useState, useEffect } from 'react';
import Medium from './components/Medium';
import './App.css';
import { IMedium } from './types';
import { getAllMediums } from './services/medium.service';

function App() {
  const [medium, setMedium] = useState<IMedium[]>([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await getAllMediums();
    if (response) {
      setMedium(response)
    }
  };

  return <Medium media={medium} />
}

export default App;
