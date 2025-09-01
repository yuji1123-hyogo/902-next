// src/components/HelloButton.tsx (Client Component)
"use client";

import { useState } from "react";

export default function HelloButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Clicked {count} times
    </button>
  );
}
