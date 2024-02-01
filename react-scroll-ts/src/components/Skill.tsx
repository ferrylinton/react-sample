import SkillIcon from "../icons/SkillIcon";

export default function Skill() {
    return (
        <div className='w-full max-w-3xl flex flex-col items-center gap-5'>
            <SkillIcon className="element-bg" />
            <div className="skill">
                <h3>Java</h3>
                <div className="flex flex-col md:flex-row gap-3 items-start">
                    <div className="skill-item">Spring Boot</div>
                    <div className="skill-item">Spring Data JPA</div>
                    <div className="skill-item">Spring Security</div>
                </div>
            </div>
            <div className="skill">
                <h3>Node</h3>
                <div className="flex flex-col md:flex-row gap-3 items-start">
                    <div className="skill-item">Express JS</div>
                    <div className="skill-item">Next JS</div>
                </div>
            </div>
            <div className="skill">
                <h3>Frontend</h3>
                <div className="flex flex-col md:flex-row gap-3 items-start">
                    <div className="skill-item">React JS</div>
                    <div className="skill-item">Tailwind CSS</div>
                </div>
            </div>

        </div>
    )
}