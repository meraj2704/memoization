"use client";
import React, { useState } from "react";
import ChildWithOutMemo from "./ChildWithOutMemo";

export default function WithOutMemo() {
  const [count, setCount] = useState(0);

  console.log("🏠 Parent rendered");
  return (
    <div>
      <h1 className="text-center">With Out Memo</h1>

      <div className="p-4">
        <h1 className="text-lg font-bold">React.memo Demo</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment Count ({count})
        </button>

        <ChildWithOutMemo name="Memo Test" />
      </div>
    </div>
  );
}
