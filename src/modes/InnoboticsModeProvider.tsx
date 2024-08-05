/*
 * Copyright (c) 2024. Glowbuzzer. All rights reserved
 */

import * as React from "react"
import { useEffect } from "react"
import { GlowbuzzerModeContextType, GlowbuzzerModeProvider } from "@glowbuzzer/controls"
import {
    ManualMode,
    useAutoModeActiveInput,
    useDrivesSafePositionValidInput,
    useManualMode,
    useSafetyOverrideEnabledInput,
    useSafetyOverrideProcessesRequired
} from "@glowbuzzer/store"

export const InnoboticsModeProvider = ({ children }) => {
    const autoModeEnabled = useAutoModeActiveInput()
    const overrideModeEnabled = useSafetyOverrideEnabledInput()
    const override_processes = useSafetyOverrideProcessesRequired()
    const [manualMode, setManualMode] = useManualMode()

    const force_override_mode =
        overrideModeEnabled || Object.values(override_processes).some(v => !v)

    const manual_mode_enabled = !force_override_mode && !autoModeEnabled

    useEffect(() => {
        // whenever we switch between auto/manual, ensure we revert to disabled mode
        // (applies equally to auto and manual mode, even though this doesn't affect auto mode)
        setManualMode(ManualMode.DISABLED)
    }, [manual_mode_enabled])

    function setMode(mode: ManualMode | "auto") {
        if (mode === "auto") {
            setManualMode(ManualMode.DISABLED)
        } else {
            setManualMode(mode)
        }
    }

    const mode = force_override_mode ? "override" : autoModeEnabled ? "auto" : manualMode

    const context: GlowbuzzerModeContextType = {
        mode,
        setMode,
        modes: [
            {
                value: "auto",
                name: "Auto",
                disabled: !autoModeEnabled
            },
            {
                value: "override",
                name: "Safety Override",
                disabled: !force_override_mode
            },
            {
                value: ManualMode.DISABLED,
                name: "Disabled",
                disabled: !manual_mode_enabled
            },
            {
                value: ManualMode.JOG,
                name: "Jog",
                disabled: !manual_mode_enabled
            },
            {
                value: ManualMode.TEST_PROGRAM,
                name: "Test Program",
                disabled: !manual_mode_enabled
            },
            {
                value: ManualMode.HAND_GUIDED,
                name: "Hand Guided",
                disabled: !manual_mode_enabled
            }
        ]
    }

    return <GlowbuzzerModeProvider context={context}>{children}</GlowbuzzerModeProvider>
}
