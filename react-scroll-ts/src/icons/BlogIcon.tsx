import { IconType } from "../types/icon-type";

export default function BlogIcon({ className }: IconType) {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className} >
        <path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z"/>
    </svg>)
}