"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [state, handleSubmit] = useForm("mnnvqlnv")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSucceeded, setHasSucceeded] = useState(false)

  // Use useEffect to handle state changes
  useEffect(() => {
    // Update local isSubmitting state based on Formspree state
    if (state.submitting !== isSubmitting) {
      setIsSubmitting(state.submitting)
    }
    
    // Show success message when the form is successfully submitted
    if (state.succeeded && !hasSucceeded) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setHasSucceeded(true)
      
      // Reset form fields
      const formElement = document.querySelector('form[action="https://formspree.io/f/mnnvqlnv"]') as HTMLFormElement;
      if (formElement) {
        formElement.reset();
      }
    }
  }, [state.submitting, state.succeeded, isSubmitting, hasSucceeded, toast])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            action="https://formspree.io/f/mnnvqlnv"
            method="POST"
          >
            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                name="name"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Subject"
                name="subject"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                name="message"
                rows={5}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
