"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageCarousel } from "./image-carousel";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectTitle?: string;
}

export function ImageModal({ isOpen, onClose, images, projectTitle }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {projectTitle ? `${projectTitle} Project Images` : 'Project Images'}
          </DialogTitle>
        </DialogHeader>
        <ImageCarousel images={images} />
      </DialogContent>
    </Dialog>
  );
} 