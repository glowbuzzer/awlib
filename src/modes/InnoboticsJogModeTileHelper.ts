/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import {
    DockTileDefinition,
    DockTileDefinitionBuilder,
    DockTileDisabled
} from "@glowbuzzer/controls"
import { useDeadman, useManualKeyswitch } from "@glowbuzzer/awlib"
import * as React from "react"
import { createElement } from "react"

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

export function InnoboticsJogModeTileHelper(tileDefinition: DockTileDefinition) {
    return DockTileDefinitionBuilder(tileDefinition)
        .wrapper((tile, connected, op, mode): React.ReactElement => {
            const keyswitch = useManualKeyswitch()
            const deadman = useDeadman()

            if (!connected) {
                return createElement(DockTileDisabled, {
                    children: tile
                })
            }

            const message = get_message(op, keyswitch, mode, deadman)
            if (message) {
                return createElement(DockTileDisabled, {
                    children: tile,
                    content: message
                })
            }
            return createElement(React.Fragment, { children: tile })
        })
        .build()
}
