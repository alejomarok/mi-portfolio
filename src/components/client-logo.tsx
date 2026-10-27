import Image from "next/image"
import type { ProjectItem } from "@/data/types"

export default function ClientLogo({project}:{project:Pick<ProjectItem,"name"|"slug"|"logo"|"brandMark">}) {
  const source = project.brandMark || project.logo
  if (!source) return null
  return <div className={`client-logo client-logo-${project.slug}`}>
    <div className="client-logo-art"><Image src={source} alt={`${project.name}, logo`} fill sizes="(max-width: 1100px) 88px, 120px" className="client-logo-image" /></div>
  </div>
}
