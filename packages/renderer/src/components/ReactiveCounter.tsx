import { useState } from "react";

const ReactiveCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        data-testid="button"
        onClick={() => setCount(c => c + 1)}
      >
        {" "}
        count is: {count}
      </button>
      <br />
      <br />
      <code>packages/renderer/src/components/ReactiveCounter.tsx</code>
    </>
  );
};
export default ReactiveCounter;
