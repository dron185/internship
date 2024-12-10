import { ReactNode } from "react"
import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import styles from "./SelectRadix.module.css"
import arrowDown from "../../assets/arrow-down.svg"

type Props = {
  children: ReactNode
  titleLabel?: string
  defaultSelect: string
}

export const SelectRadix = ({ titleLabel, children, defaultSelect}: Props) => {
  return (
    <Select.Root>
      <Select.Group className={styles.Group}>
        <Select.Label className={styles.Label}>{titleLabel}</Select.Label>
        <Select.Trigger className={styles.Trigger} aria-label="Food">
          <Select.Value placeholder={defaultSelect}/>
          <Select.Icon className={styles.Icon} asChild>
            <img src={arrowDown} alt="arrow" />
          </Select.Icon>
        </Select.Trigger>
      </Select.Group>

      <Select.Portal>
        <Select.Content
          className={styles.Content}
          position={"popper"}
          align={"start"}
          avoidCollisions={false}
          // sideOffset={-1}
        >
          <Select.ScrollUpButton className={styles.ScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={styles.Viewport}>
            <Select.Group>
              {children}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.ScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

