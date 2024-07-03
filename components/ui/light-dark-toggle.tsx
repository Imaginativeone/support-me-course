'use client'

import { useState } from "react"
import { Tooltip, TooltipProvider } from "./tooltip"
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"
import { MoonIcon, SunIcon } from "lucide-react"

export function LightDarkToggle() {
  
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={() => {
          setIsDarkMode(prevValue => !prevValue)
        }}>
          { isDarkMode ? <MoonIcon /> : <SunIcon /> }
        </TooltipTrigger>
        <TooltipContent>
          { isDarkMode ? "Enable Light Mode" : "Enable Dark Mode" }
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
