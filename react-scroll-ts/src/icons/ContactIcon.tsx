import { IconType } from "../types/icon-type";

export default function ContactIcon({ className }: IconType) {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        fillRule="evenodd" clipRule="evenodd">
            <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/>
    </svg>)
}