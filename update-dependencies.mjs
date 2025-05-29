/**
 * Script to update package.json using dependencies from core gbr package.json
 *
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import fs from "fs"

const [, , save_arg] = process.argv

const save = save_arg === "--save"

const gbr = JSON.parse(fs.readFileSync("../../../package.json").toString())
const local = JSON.parse(fs.readFileSync("./package.json").toString())

console.log("Updating dependencies in package.json from", gbr.name, "version", gbr.version)

function update_dependencies(localDeps, gbrDeps) {
    for (const [name, version] of Object.entries(localDeps)) {
        if (name.startsWith("@glowbuzzer")) {
            if (version !== gbr.version) {
                console.log("Version change for", name, "from", version, "to", gbr.version)
            }
            localDeps[name] = gbr.version
            continue
        }
        if (gbr.dependencies[name] && version !== gbr.dependencies[name]) {
            console.log("Version change for", name, "from", version, "to", gbr.dependencies[name])
            localDeps[name] = gbr.dependencies[name]
        }
    }
}

update_dependencies(local.peerDependencies, gbr.dependencies)
update_dependencies(local.devDependencies, gbr.dependencies)

if (save) {
    console.log("Writing package.json")
    fs.writeFileSync("./package.json", JSON.stringify(local, null, 2))
} else {
    console.log("** No changes made. Use --save to write package.json")
}
