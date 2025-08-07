"use client"

import { useRef, forwardRef, useImperativeHandle } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export interface RecaptchaRef {
  executeRecaptcha: () => Promise<string | null>
  resetRecaptcha: () => void
}

interface RecaptchaProps {
  siteKey: string
  theme?: "light" | "dark"
  size?: "compact" | "normal" | "invisible"
  onChange?: (token: string | null) => void
}

const Recaptcha = forwardRef<RecaptchaRef, RecaptchaProps>(
  ({ siteKey, theme = "dark", size = "normal", onChange }, ref) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    useImperativeHandle(ref, () => ({
      executeRecaptcha: async () => {
        if (!recaptchaRef.current) return null
        
        try {
          // Para reCAPTCHA v2, usar executeAsync
          const token = await recaptchaRef.current.executeAsync()
          return token
        } catch (error) {
          console.error("Error ejecutando reCAPTCHA:", error)
          return null
        }
      },
      resetRecaptcha: () => {
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
      }
    }))

    const handleChange = (token: string | null) => {
      if (onChange) {
        onChange(token)
      }
    }

    return (
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          theme={theme}
          size={size}
          onChange={handleChange}
        />
      </div>
    )
  }
)

Recaptcha.displayName = "Recaptcha"

export default Recaptcha
