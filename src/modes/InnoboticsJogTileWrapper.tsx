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
    useMachineTargetState
} from "@glowbuzzer/store"
import { DockTileDisabledWithNestedSupport, useGlowbuzzerMode } from "@glowbuzzer/controls"

export const InnoboticsJogTileWrapper = ({ children }) => {
    const autoMode = useAutoModeActiveInput()
    const enablingSwitch = useEnablingSwitchInput()
    const { connected } = useConnection()
    const [, requestedTarget] = useMachineTargetState()
    const { mode, modes } = useGlowbuzzerMode()
    const sim = requestedTarget === MACHINETARGET.MACHINETARGET_SIMULATION

    const current = modes.find(m => m.value === mode)

    function get_message() {
        if (sim || !connected) {
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

    const message = get_message()

    return (
        <DockTileDisabledWithNestedSupport disabled={!connected || !!message} content={message}>
            {children}
        </DockTileDisabledWithNestedSupport>
    )
}
