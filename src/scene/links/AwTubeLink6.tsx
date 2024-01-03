/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { TriadHelper } from "@glowbuzzer/controls"
import { Model } from "./Model"

export const AwTubeLink6 = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { m0, j5, s0 } = parts

    return (
        <group position={[0, 0, m0.length + j5.moveableFlangeFromCentreLine]}>
            <Model base64={s0.base64} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}
