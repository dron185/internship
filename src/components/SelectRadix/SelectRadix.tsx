import React, { ComponentPropsWithRef, ForwardedRef } from "react"
import * as Select from "@radix-ui/react-select"
import classnames from "classnames"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons"
import styles from "./SelectRadix.module.css"

export const SelectRadix = () => (
  <Select.Root>
    {/*<Select.Group className={styles.Group}>*/}
    {/*  <Select.Label className={styles.Label}>Fruits</Select.Label>*/}
    {/*  */}
    {/*</Select.Group>*/}

    <Select.Trigger className={styles.Trigger} aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className={styles.Icon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content
        className={styles.Content}
        position={"popper"}
        align={"start"}
        avoidCollisions={false}
        sideOffset={-2}
      >
        <Select.ScrollUpButton className={styles.ScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={styles.Viewport}>
          <Select.Group>
            {/*<Select.Label className={styles.Label}>Fruits</Select.Label>*/}
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={styles.ScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

type SelectItemProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithRef<typeof Select.Item>

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: SelectItemProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <Select.Item
        className={classnames(styles.Item, className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.ItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)
