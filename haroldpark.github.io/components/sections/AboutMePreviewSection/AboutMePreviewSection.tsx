"use client";
import DecryptedText from "@/components/TextAnimations/DecryptedText/DecryptedText";

export function AboutMePreviewSection() {
  return (
    <div className="text-center py-16 font-secondary">
      <DecryptedText
        text="Solving real-world problems with tech and empathy"
        speed={50}
        maxIterations={8}
        sequential={true}
        revealDirection="start"
        animateOn="view"
        className="text-xl text-gray-600"
      />
    </div>
  );
}
