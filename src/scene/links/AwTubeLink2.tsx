/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts } from "../../types"
import React from "react"

export const AwTubeLink2 = ({ parts }: { parts: AwTubeLoadedRobotParts }) => {
    const { j0, p0, c0, j1, l0, j2 } = parts
    return (
        <>
            <group position={[0, 0, j0.fixedFlangeFromCentreLine]}>
                <primitive object={p0.object} rotation={[Math.PI / 2, 0, 0]} />
                <primitive
                    object={c0.object}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, c0.thickness]}
                />
                <group position={[0, 0, c0.thickness]}>
                    <primitive
                        object={j1.object}
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
                            <primitive object={l0.object} rotation={[Math.PI / 2, 0, 0]} />

                            <group position={[0, 0, l0.length]}>
                                <group
                                    position={[0, 0, j2.fixedFlangeFromCentreLine]}
                                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                >
                                    <primitive object={j2.object} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </>
    )
}
