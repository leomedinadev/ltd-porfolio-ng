interface Btn {
  text: string,
  url: string
  icon: string
}

export interface Project {
  title: string,
  description: string,
  link: string,
  github: string,
  image: string,
  technologies: string[],
  buttons: Btn[],
}
