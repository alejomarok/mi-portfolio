export type Locale = "es" | "en"

export type Localized<T> = Record<Locale, T>

export interface NavItem {
  href: string
  label: Localized<string>
}

export type SocialIcon = "github" | "linkedin" | "mail"

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
}

export interface SkillCategory {
  id: string
  title: Localized<string>
  items: string[]
}

export interface ResponsibilityGroup {
  title: Localized<string>
  items: Localized<string[]>
}

export interface ExperienceItem {
  id: string
  role: Localized<string>
  company: string
  location: Localized<string>
  period: Localized<string>
  summary: Localized<string>
  responsibilityGroups: ResponsibilityGroup[]
  stack: string[]
}

export type ProjectCoverVariant = "indigo" | "teal" | "amber"

export interface ProjectItem {
  id: string
  slug: string
  name: string
  subtitle: Localized<string>
  category: Localized<string>
  shortDescription: Localized<string>
  problem: Localized<string>
  solution: Localized<string>
  users: Localized<string>
  role: Localized<string>
  features: Localized<string[]>
  technologies: string[]
  architecture: Localized<string>
  challenges: Localized<string>
  value: Localized<string>
  year: string
  repositoryUrl?: string
  liveUrl?: string
  coverVariant: ProjectCoverVariant
  screenshotTodo: Localized<string>
  contentNote?: Localized<string>
  featured: boolean
  displayOrder: number
}

export interface Certification {
  id: string
  title: Localized<string>
}

export interface MethodologyStep {
  id: string
  title: Localized<string>
  description: Localized<string>
}

export interface StrengthItem {
  id: string
  title: Localized<string>
  description: Localized<string>
}
