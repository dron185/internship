import { Header } from "./components/Header/Header.tsx"
import { Posts } from "./components/Posts/Posts.tsx"
import { CheckboxRadix } from "./components/CheckboxRadix/CheckboxRadix.tsx"
import s from './App.module.css'
import { Option, RadioGroupRadix } from "./components/RadioGroupRadix/RadioGroupRadix.tsx"
import { SelectRadix } from "./components/SelectRadix/SelectRadix.tsx"


const radioOptions: Option[] = [
  { value: "default", label: "Default" },
  { value: "comfortable", label: "Comfortable" },
  { value: "compact", label: "Compact" },
];

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Posts />
      <CheckboxRadix
        labelText={"Accept terms and conditions."}
        checked={false}
        disabled={false}
      />
      <RadioGroupRadix disabled={false} options={radioOptions}/>

      <SelectRadix/>
    </div>
  )
}

export default App
