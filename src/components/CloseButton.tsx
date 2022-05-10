import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

export function CloseButton() {
    return (
        <Popover.Button className="top-5 right-5 absolute text-text-secondary dark:text-dark-text-secondary hover:text-text-on-tooltip dark:hover:text-dark-text-on-tooltip" title="Fechar formulário de feedback">
            <X weight="bold" className="w-4 h-4"/>
        </Popover.Button>
    )
}