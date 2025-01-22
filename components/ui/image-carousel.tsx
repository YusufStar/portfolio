"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((current) => 
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) => 
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative w-full aspect-video">
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm"
        onClick={previousImage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm"
        onClick={nextImage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-background/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 