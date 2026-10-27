import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Locale, ProjectItem } from "@/data/types"

export default function ProjectPresentation({project,language,linked=false,priority=false}:{project:Pick<ProjectItem,"name"|"image">;language:Locale;linked?:boolean;priority?:boolean}) {
  const en = language === "en"
  return <figure className="project-presentation">
    <Image src={project.image!} width={1440} height={1000} alt={en ? `${project.name} public website interface` : `Interfaz del sitio público de ${project.name}`} priority={priority} sizes={linked ? "(max-width: 767px) 85vw, 59vw" : "(max-width: 767px) 85vw, 86vw"} className="project-screen" />
    <figcaption className="project-presentation-caption">
      <span>{en ? "The public experience" : "La experiencia pública"}</span>
      {linked ? <span className="presentation-action">{en ? "Explore" : "Explorar"}<ArrowUpRight size={20} aria-hidden="true" /></span> : <span translate="no">{project.name}</span>}
    </figcaption>
  </figure>
}
