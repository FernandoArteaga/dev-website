export interface CV {
  basics: Basics
  work: Array<Work>
  volunteer: Array<Volunteer>
  education: Array<Education>
  awards: Array<Awards>
  certificates: Array<Certificate>
  publications: Array<Publication>
  skills: Array<Skill>
  languages: Array<Languages>
  interests: Array<Interests>
  references: Array<References>
  projects: Array<Project>
}

interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  icon: string
  url: string
  startDate: string
  endDate: string | null
  summary: string
  highlights: Highlight
}

interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  highlights: Highlight
}

interface Skill {
  name: string
  level: string
  keywords: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificate {
  name: string,
  date: string,
  issuer: string,
  url: string
}

interface Publication {
  name: string
  publisher: string
  releaseDate: string
  url: string
  summary: string
}

interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  score: string
  courses: Array<string>
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

interface Project {
  name: string
  description: string
  status?: ProjectStatus
  highlights: Highlight
  url: string
  repository?: string
}

export type ProjectStatus = "archived"

interface Interests {
  name: string
  keywords: Array<string>
}

interface References {
  name: string
  reference: string
}

type Highlight = Array<String>
