import { Header } from "./components/Header/Header.tsx"
import { Posts } from "./components/Posts/Posts.tsx"
import { CheckboxRadix } from "./components/CheckboxRadix/CheckboxRadix.tsx"
import s from './App.module.css'
import { RadioGroupRadix } from "./components/RadioGroupRadix/RadioGroupRadix.tsx"

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
      <RadioGroupRadix disabled={false}/>
    </div>
  )
}

export default App
