import BlogIcon from "../icons/BlogIcon"
import ContactIcon from "../icons/ContactIcon"
import HomeIcon from "../icons/HomeIcon"
import SkillIcon from "../icons/SkillIcon"
import ScrollLink from "./ScrollLink"

type Props = {
  isSticky: boolean,
  currentTo: string,
  onSetActive?(to: string, element: HTMLElement): void
}

export default function Header({ isSticky, currentTo, onSetActive }: Props) {
  return (
    <header className={isSticky ? 'header sticky' : 'header'}>
      <nav className="nav">
        <ScrollLink to="home" currentTo={currentTo} onSetActive={onSetActive}>
          <HomeIcon />
          <span>Home</span>
        </ScrollLink>
        <ScrollLink to="skill" currentTo={currentTo} onSetActive={onSetActive}>
          <SkillIcon />
          <span>Skill</span>
        </ScrollLink>
        <ScrollLink to="blog" currentTo={currentTo} onSetActive={onSetActive}>
          <BlogIcon />
          <span>Blog</span>
        </ScrollLink>
        <ScrollLink to="contact" currentTo={currentTo} onSetActive={onSetActive}>
          <ContactIcon />
          <span>Contact</span>
        </ScrollLink>
      </nav>
    </header>
  )
}