/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { Model } from "./Model"
import { useGLTF } from "@react-three/drei"

export const AwTubeBaseLink = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { b0, j0 } = parts

    return (
        <Model
            base64={b0.base64}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -j0.moveableFlangeFromCentreLine - b0.thickness]}
        />
    )
}
