"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import { ImageModal } from "@/components/ui/image-modal";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
        role="article"
      >
        <CardContent className="p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          <Badge variant="outline" className="mb-4">{project.badge}</Badge>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="group"
              asChild
            >
              <Link 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            
            {project.images && project.images.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="group"
                onClick={() => setIsImageModalOpen(true)}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Show Images
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {project.images && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          images={project.images}
          projectTitle={project.title}
        />
      )}
    </>
  );
}; 