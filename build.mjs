import esbuild from "esbuild"
import fs from "fs"

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))
const externals = [
    pkg.dependencies,
    pkg.devDependencies,
    pkg.peerDependencies,
    pkg.optionalDependencies
]
    .map(d => d && Object.keys(d))
    .filter(Boolean)
    .flat()

console.log("externals", externals)
esbuild
    .build({
        entryPoints: ["./src/index.ts"],
        bundle: true,
        outfile: "./dist/index.js",
        platform: "node",
        target: "node18",
        format: "esm",
        external: externals
    })
    .catch(e => {
        console.log(e)
        return process.exit(1)
    })
