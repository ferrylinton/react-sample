import { IconType } from "../types/icon-type";

export default function SkillIcon({ className }: IconType) {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className} >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 16l-6-2.935v-2.131l6-2.934v2.199l-3.64 1.801 3.64 1.796v2.204zm2-8v2.199l3.64 1.801-3.64 1.796v2.204l6-2.935v-2.131l-6-2.934z"/>
    </svg>)
}