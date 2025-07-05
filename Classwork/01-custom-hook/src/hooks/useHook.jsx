import { useState } from "react";

const useHook = () => {
  const [value, setValue] = useState();
  function valueSetter(newValue) {
    return setValue(newValue);
  }
  return [value, valueSetter];
};

export default useHook;
