import { IconType } from "../types/icon-type";

export default function SkillIcon({ className }: IconType) {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className} >
        <path d="M13 12v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201zm5.362-12.201c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/>
    </svg>)
}