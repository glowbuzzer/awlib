/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import * as React from "react"
import { useEffect, useState } from "react"
import { DRACOLoader, GLTFLoader } from "three-stdlib"

const gltfLoader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath("/assets/draco/")
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Loads a model from a base64 encoded string.
 * Supports Draco compressed GLTF/GLB provided the project includes the Draco decoder WASM in /assets/draco public folder.
 * The Draco WASM files are included automatically if using the vite-draco-plugin provided.
 */
export const Model = ({ base64, ...props }) => {
    const [model, setModel] = useState(null)
    useEffect(() => {
        function base64ToArrayBuffer(base64) {
            const binaryString = atob(base64)
            const len = binaryString.length
            const bytes = new Uint8Array(len)
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i)
            }
            return bytes.buffer
        }

        gltfLoader.parse(
            base64ToArrayBuffer(base64),
            "",
            gltf => {
                setModel(gltf.scene)
            },
            error => {
                console.log("error loading model", error)
            }
        )
    }, [base64])

    return model ? <primitive object={model} {...props} /> : null
}
