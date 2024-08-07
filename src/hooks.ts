/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import { AwTubeLoadedRobotParts, AwTubeRobotParts } from "./types"
import { useEffect, useState } from "react"
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib"
import { suspend } from "suspend-react"

type ResolvedPart = { url: string; buffer: ArrayBuffer }

const gltfLoader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath("/assets/draco/")
gltfLoader.setDRACOLoader(dracoLoader)

function load(base64: string): Promise<GLTF> {
    function base64ToArrayBuffer(base64: string) {
        const binaryString = atob(base64)
        const len = binaryString.length
        const bytes = new Uint8Array(len)
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i)
        }
        return bytes.buffer
    }

    return new Promise((resolve, reject) => {
        const buffer = base64ToArrayBuffer(base64)
        gltfLoader.parse(buffer, "", resolve, reject)
    })
}

/**
 * Loads the robot parts from the assets folder and attaches them to object property of the loaded parts
 * @param parts The parts to be loaded
 */
export function useLoadedRobotParts(parts: AwTubeRobotParts): AwTubeLoadedRobotParts {
    return Object.fromEntries(
        Object.entries(parts).map(([name, part]) => {
            // const object = useGLTF(`/assets/awtube-parts-v2/${part.filename}`).scene.clone()
            const object = suspend(() => load(part.base64), [part.base64]).scene.clone()

            return [
                name,
                {
                    ...part,
                    object
                }
            ]
        })
    ) as AwTubeLoadedRobotParts
}

export function useLoadedRobotPartsWithEmbeddedAssets(
    parts: AwTubeRobotParts,
    resolver: (string) => ResolvedPart
): AwTubeLoadedRobotParts {
    const [loaded, setLoaded] = useState<AwTubeLoadedRobotParts>()

    useEffect(() => {
        Promise.all(
            Object.entries(parts).map(([name, part]) => {
                const info = resolver?.(part.filename)
                if (!info) {
                    throw new Error("Failed to resolve part: " + part.filename)
                }
                return new Promise((resolve, reject) => {
                    const loader = new GLTFLoader()
                    loader.parse(
                        info.buffer,
                        "",
                        gltf => {
                            resolve({
                                name,
                                loaded: { ...part, object: gltf.scene.clone() }
                            })
                        },
                        reject
                    )
                })
            })
        )
            .then(loadedParts => {
                setLoaded(
                    Object.fromEntries(
                        loadedParts.map(({ name, loaded }) => [name, loaded])
                    ) as AwTubeLoadedRobotParts
                )
            })
            .catch(e => {
                console.log("Error loading parts", e)
            })
    }, [parts, resolver])

    return loaded
}
