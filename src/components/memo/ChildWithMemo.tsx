import React from "react";

// File: components/Child.tsx
const ChildWithMemo = React.memo(({ name }: { name: string }) => {
  console.log("👶 Child rendered from with memo");
  return <div>Child Component: {name}</div>;
});

export default ChildWithMemo;
