import type { Meta, StoryObj } from "@storybook/react"
import { ModalRadix } from "./ModalRadix"
import { useState } from "react"
import { Button } from "../../Button/Button.tsx"

const meta = {
  component: ModalRadix,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalRadix>

export default meta
type Story = StoryObj<typeof ModalRadix>

export const BaseModal: Story = {
  render: function Render(args) {
    const [isModal, setIsModal] = useState(false)

    return (
      <>
        <Button onClick={() => setIsModal(true)}>open modal</Button>
        <ModalRadix {...args} modalTitle={"Modal title"} open={isModal} onClose={() => setIsModal(false)}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at cumque distinctio dolorem doloremque impedit
            incidunt, inventore iure officia omnis placeat possimus praesentium, quisquam repellendus repudiandae saepe
            sunt ullam veniam.
          </div>
        </ModalRadix>
      </>
    )
  },
}
