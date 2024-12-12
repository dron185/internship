import * as Select from "@radix-ui/react-select"
import styles from "./SelectRadix.module.css"
import arrowDown from "../../assets/arrow-down.svg"
import { SelectItem } from "./SelectItem.tsx"

export type Values = {
  value: string
  valueTitle: string
}

type Props = {
  selectTitle?: string
  defaultValue: string
  values: Values[]
}

export const SelectRadix = ({ defaultValue, values, selectTitle }: Props) => {
  return (
    <Select.Root>
      <Select.Group className={styles.Group}>
        <Select.Label className={styles.Label}>{selectTitle}</Select.Label>
        <Select.Trigger disabled={false} className={styles.Trigger} aria-label="Food">
          <Select.Value placeholder={defaultValue} />
          <Select.Icon className={styles.Icon} asChild>
            <img src={arrowDown} alt="arrow" />
          </Select.Icon>
        </Select.Trigger>
      </Select.Group>

      <Select.Portal>
        <Select.Content
          className={styles.Content}
          position={"popper"}
          avoidCollisions={true}
          sideOffset={-1}
        >
          <Select.Viewport className={styles.Viewport}>
            <Select.Group className={styles.Group}>
              {values.map(value => (
                <SelectItem key={value.value} value={value.value}>
                  {value.valueTitle}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>

        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

