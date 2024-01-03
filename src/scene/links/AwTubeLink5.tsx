/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { TriadHelper } from "@glowbuzzer/controls"
import { Model } from "./Model"

export const AwTubeLink5 = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { j4, m0, j5, p2 } = parts
    return (
        <group position={[0, 0, j4.moveableFlangeFromCentreLine]}>
            <Model base64={p2.base64} rotation={[Math.PI / 2, 0, 0]} />
            <Model base64={m0.base64} rotation={[Math.PI / 2, Math.PI / 2, 0]} />

            <group
                position={[0, -m0.length, -m0.offset]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            >
                <Model
                    base64={j5.base64}
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[-j5.fixedFlangeFromCentreLine, 0, 0]}
                />
            </group>
        </group>
    )
}
