/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { Model } from "./Model"

export const AwTubeLink4 = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { j3, l1, j4, p1 } = parts
    return (
        <>
            <group position={[0, 0, j3.moveableFlangeFromCentreLine]}>
                <Model base64={p1.base64} rotation={[-Math.PI / 2, 0, 0]} />

                <group>
                    <Model
                        base64={l1.base64}
                        rotation={[Math.PI / 2, 0, 0]}
                        position={[0, 0, 0.0042]}
                    />

                    <group position={[0, 0, l1.length]}>
                        <group
                            position={[0, 0, j4.fixedFlangeFromCentreLine]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        >
                            <Model base64={j4.base64} rotation={[Math.PI / 2, 0, 0]} />
                        </group>
                    </group>
                </group>
            </group>
        </>
    )
}
