/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts } from "../../types"
import React from "react"

export const AwTubeLink1 = ({ parts }: { parts: AwTubeLoadedRobotParts }) => {
    const { j0 } = parts

    return <primitive object={j0.object} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
}
