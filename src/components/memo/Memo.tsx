import React from "react";
import WithOutMemo from "./WithOutMemo";
import WithMemo from "./WithMemo";

export default function Memo() {
  return (
    <div className="container mx-auto pt-10 grid grid-cols-2 divide-red-700 h-screen">
      <div className=" w-full">
        <WithOutMemo />
      </div>
      <div className=" w-full">
        <WithMemo />
      </div>
    </div>
  );
}
