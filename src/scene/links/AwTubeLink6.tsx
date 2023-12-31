/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts } from "../../types"
import React from "react"

export const AwTubeLink6 = ({ parts }: { parts: AwTubeLoadedRobotParts }) => {
    const { m0, j5, s0 } = parts

    return (
        <group position={[0, 0, m0.length + j5.moveableFlangeFromCentreLine]}>
            <primitive object={s0.object} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}
