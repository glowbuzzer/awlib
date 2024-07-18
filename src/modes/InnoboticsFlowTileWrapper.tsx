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
import {
    DockTileDisabled,
    FlowCustomContextProvider,
    useGlowbuzzerMode
} from "@glowbuzzer/controls"

export const InnoboticsFlowTileWrapper = ({ children }) => {
    const autoMode = useAutoModeActiveInput()
    const enablingSwitch = useEnablingSwitchInput()
    const { mode, modes } = useGlowbuzzerMode()

    function get_message() {
        if (autoMode || mode !== ManualMode.TEST_PROGRAM) {
            return "Auto or Test Program Mode not selected"
        }
        if (!autoMode && !enablingSwitch) {
            return "Enabling switch not engaged"
        }
    }

    const message = get_message()

    return (
        <FlowCustomContextProvider message={message} enabled={!message}>
            {children}
        </FlowCustomContextProvider>
    )
}
