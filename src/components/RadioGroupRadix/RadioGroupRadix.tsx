import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./RadioGroupRadix.module.css";
import { Option } from "../../App.tsx"

type Props = {
  disabled?: boolean
  options: Option[];
}

export const RadioGroupRadix = ({disabled, options}: Props) => (
  <form>
    <RadioGroup.Root
      className={styles.Root}
      defaultValue="default"
      aria-label="View density"
      disabled={disabled}
    >
      {options.map((option, index) => (
        <div style={{ display: "flex", alignItems: "center" }} key={index}>
          <RadioGroup.Item className={styles.Item} value={option.value} id={`r${index + 1}`}>
            <RadioGroup.Indicator className={styles.Indicator} />
          </RadioGroup.Item>
          <label className={`${styles.Label} ${disabled ? styles.LabelDisabled : ""}`} htmlFor={`r${index + 1}`}>
            {option.label}
          </label>
        </div>
      ))}

      {/*<div style={{ display: "flex", alignItems: "center" }}>*/}
      {/*  <RadioGroup.Item className={styles.Item} value="comfortable" id="r2">*/}
      {/*    <RadioGroup.Indicator className={styles.Indicator} />*/}
      {/*  </RadioGroup.Item>*/}
      {/*  <label className={`${styles.Label} ${disabled ? styles.LabelDisabled: ""}`} htmlFor="r2">*/}
      {/*    Comfortable*/}
      {/*  </label>*/}
      {/*</div>*/}
      {/*<div style={{ display: "flex", alignItems: "center" }}>*/}
      {/*  <RadioGroup.Item className={styles.Item} value="compact" id="r3">*/}
      {/*    <RadioGroup.Indicator className={styles.Indicator} />*/}
      {/*  </RadioGroup.Item>*/}
      {/*  <label className={`${styles.Label} ${disabled ? styles.LabelDisabled: ""}`} htmlFor="r3">*/}
      {/*    Compact*/}
      {/*  </label>*/}
      {/*</div>*/}
    </RadioGroup.Root>
  </form>
);

