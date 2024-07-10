/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import * as React from "react"
import {
    ManualMode,
    useAutoModeActiveInput,
    useConnection,
    useEnablingSwitchInput
} from "@glowbuzzer/store"
import { DockTileDisabled, useGlowbuzzerMode } from "@glowbuzzer/controls"

export const InnoboticsJogTileWrapper = ({ children }) => {
    const autoMode = useAutoModeActiveInput()
    const enablingSwitch = useEnablingSwitchInput()
    const { connected } = useConnection()
    const { mode, modes } = useGlowbuzzerMode()

    const current = modes.find(m => m.value === mode)

    function get_message() {
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
