/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import {
    PartDefinitionForBase,
    PartDefinitionForClamp,
    PartDefinitionForJoint,
    PartDefinitionForLink,
    PartDefinitionForMonobraccio,
    PartDefinitionForPlate,
    PartDefinitionForSpindle
} from "../types"
import { default as MM219 } from "./parts/bases/base_219.js"
import { default as J40LP } from "./parts/joints/joint_j40_lp.js"
import { default as J40HP } from "./parts/joints/joint_j40_hp.js"
import { default as J32 } from "./parts/joints/joint_j32.js"
import { default as J25 } from "./parts/joints/joint_j25.js"
import { default as J20 } from "./parts/joints/joint_j20"
import { default as J40_J40 } from "./parts/clamps/clamp_j40_j40"
import { default as J32_J25 } from "./parts/clamps/clamp_j32_j25"
import { default as PLATE_J40 } from "./parts/plates/plate_j40"
import { default as PLATE_J25 } from "./parts/plates/plate_j25"
import { default as L100_294 } from "./parts/links/link_100_294"
import { default as L100_494 } from "./parts/links/link_100_494"
import { default as L125_314 } from "./parts/links/link_125_314"
import { default as L125_514 } from "./parts/links/link_125_514"
import { default as M220 } from "./parts/monobraccios/monobraccio_220"
import { default as M250 } from "./parts/monobraccios/monobraccio_250"
import { default as M112 } from "./parts/spindles/spindle_112"

/**
 * This file provides the complete catalog of available parts that can be used to construct a robot.
 */

export const Base: Record<"MM219" | "MM219_27", PartDefinitionForBase> = {
    MM219: {
        filename: "bases/base_219.glb",
        thickness: 0.025,
        base64: MM219
    },
    MM219_27: {
        filename: "bases/base_219.glb",
        thickness: 0.027,
        base64: MM219
    }
}

export const Joint: Record<"J40LP" | "J40HP" | "J32" | "J25" | "J20", PartDefinitionForJoint> = {
    J40LP: {
        base64: J40LP,
        filename: "joints/joint_j40_lp.glb",
        fixedFlangeFromCentreLine: 0.1015,
        moveableFlangeFromCentreLine: 0.092
    },
    J40HP: {
        base64: J40HP,
        filename: "joints/joint_j40_hp.glb",
        fixedFlangeFromCentreLine: 0.106,
        moveableFlangeFromCentreLine: 0.092
    },
    J32: {
        base64: J32,
        filename: "joints/joint_j32.glb",
        fixedFlangeFromCentreLine: 0.1045,
        moveableFlangeFromCentreLine: 0.092
    },
    J25: {
        base64: J25,
        filename: "joints/joint_j25.glb",
        fixedFlangeFromCentreLine: 0.0915,
        moveableFlangeFromCentreLine: 0.0874
    },
    J20: {
        base64: J20,
        filename: "joints/joint_j20.glb",
        fixedFlangeFromCentreLine: 0.073,
        moveableFlangeFromCentreLine: 0.059
    }
}
export const Clamp: Record<"J40_J40" | "J32_J25", PartDefinitionForClamp> = {
    J40_J40: {
        base64: J40_J40,
        filename: "clamps/clamp_j40_j40.glb",
        thickness: 0.0505
    },
    J32_J25: {
        base64: J32_J25,
        filename: "clamps/clamp_j32_j25.glb",
        thickness: 0.0635
    }
}

export const Plate: Record<"J25" | "J40", PartDefinitionForPlate> = {
    J40: {
        base64: PLATE_J40,
        filename: "plates/plate_j40.glb"
    },
    J25: {
        base64: PLATE_J25,
        filename: "plates/plate_j25.glb"
    }
}

export const Link: Record<
    "L100_294" | "L100_494" | "L125_314" | "L125_514",
    PartDefinitionForLink
> = {
    L100_294: {
        base64: L100_294,
        filename: "links/link_100_294.glb",
        length: 0.294
    },
    L100_494: {
        base64: L100_494,
        filename: "links/link_100_494.glb",
        length: 0.494
    },
    L125_314: {
        base64: L125_314,
        filename: "links/link_125_314.glb",
        length: 0.314
    },
    L125_514: {
        base64: L125_514,
        filename: "links/link_125_514.glb",
        length: 0.514
    }
}
export const Monobraccio: Record<"M220" | "M250", PartDefinitionForMonobraccio> = {
    M220: {
        base64: M220,
        filename: "monobraccios/monobraccio_220.glb",
        length: 0.22,
        offset: 0.014
    },
    M250: {
        base64: M250,
        filename: "monobraccios/monobraccio_250.glb",
        length: 0.25,
        offset: 0.014
    }
}
export const Spindle: Record<"M112", PartDefinitionForSpindle> = {
    M112: {
        base64: M112,
        filename: "spindles/spindle_112.glb"
    }
}
