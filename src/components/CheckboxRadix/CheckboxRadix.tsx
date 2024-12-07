import * as Checkbox from "@radix-ui/react-checkbox"
import styles from "./CheckboxRadix.module.css"
import { CheckIconCustom } from "./CheckIconCustom.tsx"

type Props = {
  labelText: string
  checked: boolean
  disabled?: boolean
}

export const CheckboxRadix = ({ labelText, checked, disabled }: Props) => (
  <form className={styles.form}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox.Root className={styles.Root} defaultChecked={checked} disabled={disabled} id="c1">
        <Checkbox.Indicator className={styles.Indicator}>
          <CheckIconCustom classIcon={disabled ? styles.disabled : styles.default} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={`${styles.Label} ${disabled ? styles.LabelDisabled : ""}`} htmlFor="c1">
        {labelText}
      </label>
    </div>
  </form>
)


