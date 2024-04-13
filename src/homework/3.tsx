import React, { ChangeEvent, useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");
  //типізація події в хендлері
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
