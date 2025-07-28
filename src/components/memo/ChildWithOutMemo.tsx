// File: components/Child.tsx
const ChildWithOutMemo = ({ name }: { name: string }) => {
  console.log("👶 Child rendered from without memo");
  return <div>Child Component: {name}</div>;
};

export default ChildWithOutMemo;
