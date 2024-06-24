/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import * as React from "react"
import { GlowbuzzerModeProvider } from "@glowbuzzer/controls"
import {
    DIN_SAFETY_TYPE,
    useSafetyDigitalInputList,
    useSafetyDigitalInputState
} from "@glowbuzzer/store"

export const InnoboticsModeProvider = ({ children }) => {
    const [requestedMode, setRequestedMode] = React.useState("auto")
    const safety_inputs = useSafetyDigitalInputList()
    const keyswitch_index = safety_inputs.findIndex(
        c => c.type === DIN_SAFETY_TYPE.DIN_SAFETY_TYPE_KEYSWITCH
    )
    const switched = useSafetyDigitalInputState(keyswitch_index)

    const mode = switched ? (requestedMode === "auto" ? "jog" : requestedMode) : "auto"

    const context = {
        mode,
        setMode: setRequestedMode,
        modes: {
            auto: {
                name: "Auto",
                disabled: switched
            },
            jog: {
                name: "Jog",
                disabled: !switched
            },
            ["test-program"]: {
                name: "Test Program",
                disabled: !switched
            },
            ["hand-guided"]: {
                name: "Hand Guided",
                disabled: !switched || keyswitch_index < 0
            }
        }
    }

    return <GlowbuzzerModeProvider context={context}>{children}</GlowbuzzerModeProvider>
}
