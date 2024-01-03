/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "../../types"
import React from "react"
import { TriadHelper } from "@glowbuzzer/controls"
import { Model } from "./Model"

export const AwTubeLink2 = ({ parts }: { parts: AwTubeRobotParts }) => {
    const { j0, p0, c0, j1, l0, j2 } = parts
    return (
        <>
            <group position={[0, 0, j0.fixedFlangeFromCentreLine]}>
                <Model base64={p0.base64} rotation={[Math.PI / 2, 0, 0]} />
                <Model
                    base64={c0.base64}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, c0.thickness]}
                />
                <group position={[0, 0, c0.thickness]}>
                    <Model
                        base64={j1.base64}
                        rotation={[Math.PI / 2, 0, 0]}
                        position={[0, 0, j1.moveableFlangeFromCentreLine]}
                    />
                    <group
                        position={[
                            j1.fixedFlangeFromCentreLine,
                            0,
                            j1.moveableFlangeFromCentreLine
                        ]}
                        rotation={[0, Math.PI / 2, 0]}
                    >
                        <group position={[0, 0, 0]}>
                            <Model base64={l0.base64} rotation={[Math.PI / 2, 0, 0]} />

                            <group position={[0, 0, l0.length]}>
                                <group
                                    position={[0, 0, j2.fixedFlangeFromCentreLine]}
                                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                >
                                    <Model base64={j2.base64} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </>
    )
}
