import Link from "next/link"

export default function NotFound() {
  return <main id="main-content" className="page-frame not-found"><h1>Proyecto no encontrado</h1><p>Podés conocer mi trabajo desde los proyectos seleccionados.</p><Link className="button button-accent" href="/#projects">Ver proyectos</Link></main>
}
