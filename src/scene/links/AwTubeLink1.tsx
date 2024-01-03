/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { Model } from "./Model"

export const AwTubeLink1 = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { j0 } = parts

    return <Model base64={j0.base64} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
}
