import BlogIcon from "../icons/BlogIcon"
import ContactIcon from "../icons/ContactIcon"
import ProfileIcon from "../icons/ProfileIcon"
import SkillIcon from "../icons/SkillIcon"
import ScrollLink from "./ScrollLink"

type Props = {
  currentTo: string,
  onSetActive?(to: string, element: HTMLElement): void
}

export default function Header({ currentTo, onSetActive }: Props) {
  return (

      <nav className="nav">
        <ScrollLink to="profile" currentTo={currentTo} onSetActive={onSetActive}>
          <ProfileIcon />
          <span>Profile</span>
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

  )
}