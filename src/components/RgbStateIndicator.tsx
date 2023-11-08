import { useConnection, useIntegerOutputState } from "@glowbuzzer/store"

const num_lights = 10

export const RgbStateIndicator = ({ size }) => {
    const { connected } = useConnection()
    const [{ effectiveValue: val }] = useIntegerOutputState(0)

    // Byte order is GRB (green, red, blue)
    const g = (val >> 16) & 0xff || 0x40
    const r = (val >> 8) & 0xff || 0x40
    const b = val & 0xff || 0x40

    const fill = connected ? `rgb(${r}, ${g}, ${b})` : `rgb(0x40,0x40,0x40)`

    return (
        <svg viewBox="0 0 100 100" width={size} height={size}>
            {Array.from({ length: num_lights }).map((_, i) => {
                const angle = (i / num_lights) * Math.PI * 2
                const x = 50 + Math.cos(angle) * 40
                const y = 50 + Math.sin(angle) * 40
                return <circle key={i} cx={x} cy={y} r={8} fill={fill} />
            })}
        </svg>
    )
}
