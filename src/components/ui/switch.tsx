"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { Moon, SunMedium } from "lucide-react"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[35px] w-[70px] shrink-0 cursor-pointer items-center rounded-sm border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-switchBackground",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "inline-flex justify-center items-center pointer-events-none h-[29px] w-[35px] rounded-sm bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[30px] data-[state=unchecked]:translate-x-[2px]"
      )}
    >
      {props.checked ? <Moon width={24} height={24} /> : <SunMedium width={24} height={24} />}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
