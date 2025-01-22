import { Project } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <Link href={project.githubUrl} target="_blank">
            <Button variant="outline" size="sm" className="group">
              <Github className="mr-2 h-4 w-4" />
              View Source
              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}; 