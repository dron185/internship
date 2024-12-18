import React, { ComponentPropsWithRef, ForwardedRef } from "react"
import * as Select from "@radix-ui/react-select"
import classnames from "classnames"
import styles from "./SelectRadix.module.css"

type SelectItemProps = {
  className?: string;
} & ComponentPropsWithRef<typeof Select.Item>

export const SelectItem = React.forwardRef(
  ({ children, className, ...props }: SelectItemProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <Select.Item
        className={classnames(styles.Item, className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText className={styles.ItemText}>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)

