/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import React from "react"
// @ts-ignore
import { ReactComponent } from "./estop.svg"
import { useEstopInput } from "@glowbuzzer/store"

export const EStopButton = ({ size }) => {
    const active = useEstopInput()

    return (
        <ReactComponent
            width={size}
            height={size}
            viewBox="0 0 614.2879 614.2879"
            opacity={active ? 1 : 0.2}
        />
    )
}
