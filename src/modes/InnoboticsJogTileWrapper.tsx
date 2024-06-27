/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import * as React from "react"
import { useDeadman, useManualKeyswitch } from "@glowbuzzer/awlib"
import { useConnection } from "@glowbuzzer/store"
import { DockTileDisabled, useGlowbuzzerMode, useOperationEnabled } from "@glowbuzzer/controls"

function get_message(op: boolean, keyswitch: boolean, mode: string, deadman: boolean) {
    if (!op) {
        return "Operation Not Enabled"
    }
    if (!keyswitch) {
        return "Manual Keyswitch Not Engaged"
    }
    if (mode !== "jog") {
        return "Jog Mode Not Selected"
    }
    if (!deadman) {
        return "Deadman Not Engaged"
    }
}

export const InnoboticsJogTileWrapper = ({ children }) => {
    const [{ actValue: keyswitch }] = useManualKeyswitch()
    const [{ actValue: deadman }] = useDeadman()
    const { connected } = useConnection()
    const op = useOperationEnabled()
    const { mode } = useGlowbuzzerMode()

    if (!connected) {
        return <DockTileDisabled children={children} />
    }

    const message = get_message(op, keyswitch, mode, deadman)
    if (message) {
        return <DockTileDisabled children={children} content={message} />
    }

    return <>{children}</>
}
