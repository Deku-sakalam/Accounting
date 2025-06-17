import test from "./test";

const Example = () => {
  const result = test();
  return <div>{JSON.stringify(result)}</div>;
};

export default Example;
