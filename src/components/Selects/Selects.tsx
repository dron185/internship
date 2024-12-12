import { SelectRadix, Values } from "../SelectRadix/SelectRadix.tsx"
import { useState } from "react"

export const Selects = () => {

  const [values] = useState<Values[]>([
    { value: "apple", valueTitle: "Apple" },
    { value: "banana", valueTitle: "Banana" },
    { value: "blueberry", valueTitle: "Blueberry" },
    { value: "grapes", valueTitle: "Grapes" },
    { value: "pineapple", valueTitle: "Pineapple" },
  ])

  return (
    <SelectRadix
      selectTitle={"Title"}
      defaultValue={values[0].valueTitle}
      values={values}
    />
  )
}


