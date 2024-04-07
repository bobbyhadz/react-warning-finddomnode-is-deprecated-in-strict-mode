import './App.css';

import React, {useEffect, useRef} from 'react';

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    input.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} defaultValue="bobbyhadz.com" />
    </div>
  );
}
