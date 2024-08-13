import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { FaDirections } from "react-icons/fa";
import { WiDirectionUpRight } from "react-icons/wi";
import { Button } from "@/components/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button>
     Check Out <WiDirectionUpRight className="mr-2 h-6 w-6" />
    </Button>
  )
}
