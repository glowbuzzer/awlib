/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import * as React from "react"
import {
    MACHINETARGET,
    ManualMode,
    useAutoModeActiveInput,
    useConnection,
    useEnablingSwitchInput,
    useMachine
} from "@glowbuzzer/store"
import { DockTileDisabled, useGlowbuzzerMode } from "@glowbuzzer/controls"

export const InnoboticsJogTileWrapper = ({ children }) => {
    const autoMode = useAutoModeActiveInput()
    const enablingSwitch = useEnablingSwitchInput()
    const { connected } = useConnection()
    const { mode, modes } = useGlowbuzzerMode()
    const machine = useMachine()
    const sim = machine.requestedTarget === MACHINETARGET.MACHINETARGET_SIMULATION

    const current = modes.find(m => m.value === mode)

    function get_message() {
        if (sim) {
            return null
        }
        if (autoMode) {
            return "Manual Mode Not Selected"
        }
        if (mode !== ManualMode.JOG) {
            return `${current.name} Mode Active`
        }
        if (!enablingSwitch) {
            return "Enabling Switch Not Engaged"
        }
    }

    if (!connected) {
        return <DockTileDisabled children={children} />
    }

    const message = get_message()
    if (message) {
        return <DockTileDisabled children={children} content={message} />
    }

    return <>{children}</>
}
