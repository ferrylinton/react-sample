import React from 'react'
import { Link } from 'react-scroll'

type Props = {
    to: string,
    currentTo: string,
    onSetActive?(to: string, element: HTMLElement): void
} & React.HTMLProps<HTMLButtonElement>

export default function ScrollLink({ to, currentTo, children, onSetActive }: Props) {
    return (
        <Link
            className={to === currentTo ? 'nav-link active': 'nav-link'}
            to={to}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={onSetActive}>
            {children}
        </Link>
    )
}