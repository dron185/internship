import { SelectRadix } from "../SelectRadix/SelectRadix.tsx"
import { SelectItem } from "../SelectRadix/SelectItem.tsx"
import { useState } from "react"

type Values = {
  value: string
  valueTitle: string
}

export const Selects = () => {
//const defaultSelect = "Apple"
  const [values, setValues] = useState<Values[]>([
    { value: "apple", valueTitle: "Apple" },
    { value: "banana", valueTitle: "Banana" },
    { value: "blueberry", valueTitle: "Blueberry" },
    { value: "grapes", valueTitle: "Grapes" },
    { value: "pineapple", valueTitle: "Pineapple" }
  ])

  return (
    <SelectRadix titleLabel={"hello"} defaultSelect={values[0].valueTitle}>
      {values.map(value => (
        <SelectItem key={value.value} value={value.value}>
          {value.valueTitle}
        </SelectItem>
      ))}
    </SelectRadix>
  )
}
