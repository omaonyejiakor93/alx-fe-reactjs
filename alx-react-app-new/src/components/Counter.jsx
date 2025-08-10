import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '5px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '5px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;