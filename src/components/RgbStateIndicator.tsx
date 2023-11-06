import { useIntegerOutputState } from "@glowbuzzer/store"

const num_lights = 10

export const RgbStateIndicator = ({ size }) => {
    const [{ effectiveValue: fill }] = useIntegerOutputState(0)

    const r = (fill >> 16) & 0xff || 0x40
    const g = (fill >> 8) & 0xff || 0x40
    const b = fill & 0xff || 0x40

    return (
        <svg viewBox="0 0 100 100" width={size} height={size}>
            {Array.from({ length: num_lights }).map((_, i) => {
                const angle = (i / num_lights) * Math.PI * 2
                const x = 50 + Math.cos(angle) * 40
                const y = 50 + Math.sin(angle) * 40
                return <circle cx={x} cy={y} r={8} fill={`rgb(${r}, ${g}, ${b})`} />
            })}
        </svg>
    )
}
