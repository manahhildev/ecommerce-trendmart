"use client"

import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export function Carousel({ children, className = "" }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
  })

  return (
    <div ref={sliderRef} className={`keen-slider ${className}`}>
      {React.Children.map(children, (child, idx) => (
        <div className="keen-slider__slide" key={idx}>
          {child}
        </div>
      ))}
    </div>
  )
}
