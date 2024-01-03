/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { Model } from "./Model"

export const AwTubeLink3 = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { j2, c1, j3 } = parts
    return (
        <>
            <group position={[0, 0, j2.moveableFlangeFromCentreLine + c1.thickness]}>
                <Model base64={c1.base64} rotation={[Math.PI / 2, 0, 0]} />

                <group
                    position={[0, 0, -c1.thickness - j3.fixedFlangeFromCentreLine]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                >
                    <Model base64={j3.base64} rotation={[Math.PI / 2, 0, 0]} />
                </group>
            </group>
        </>
    )
}
