import {
    MachineState,
    useConnection,
    useIntegerOutputState,
    useMachineState
} from "@glowbuzzer/store"
import { useEffect } from "react"

function get_colour(state: MachineState) {
    /**
     * Byte order is GRB (green, red, blue)
     */
    switch (state) {
        case MachineState.FAULT:
        case MachineState.FAULT_REACTION_ACTIVE:
            return 0x00ff00
        case MachineState.OPERATION_ENABLED:
            return 0xff0000
        default:
            // orange
            return 0xa5ff00
    }
}

export const RgbStateHandler = () => {
    const { connected } = useConnection()
    const state = useMachineState()
    const [, setIntegerOut] = useIntegerOutputState(0)

    useEffect(() => {
        if (connected) {
            setIntegerOut(get_colour(state), true)
        }
    }, [connected, state])

    // this component is non-visible
    return null
}
