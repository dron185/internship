import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./RadioGroupRadix.module.css";

type Props = {
  disabled: boolean
}

export const RadioGroupRadix = ({disabled}: Props) => (
  <form>
    <RadioGroup.Root
      className={styles.Root}
      defaultValue="default"
      aria-label="View density"
      disabled={disabled}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className={styles.Item} value="default" id="r1" >
          <RadioGroup.Indicator className={styles.Indicator} />
        </RadioGroup.Item>
        <label className={`${styles.Label} ${disabled ? styles.LabelDisabled: ""}`} htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className={styles.Item} value="comfortable" id="r2">
          <RadioGroup.Indicator className={styles.Indicator} />
        </RadioGroup.Item>
        <label className={`${styles.Label} ${disabled ? styles.LabelDisabled: ""}`} htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className={styles.Item} value="compact" id="r3">
          <RadioGroup.Indicator className={styles.Indicator} />
        </RadioGroup.Item>
        <label className={`${styles.Label} ${disabled ? styles.LabelDisabled: ""}`} htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);
