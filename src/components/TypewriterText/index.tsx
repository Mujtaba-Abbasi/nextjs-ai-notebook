"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(tw) =>
        tw
          .typeString("Developed by Mujtaba")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Super-charged productivity.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("AI Powered Image Suggestions for notes.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("AI Powered Auto-complete Suggestions.")
          .start()
      }
    ></Typewriter>
  );
}
