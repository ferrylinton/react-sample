export default function Skill() {
    return (
        <div className='w-full max-w-3xl py-[100px] flex flex-col items-center gap-8'>
            <div className="border border-slate-200/80 rounded-xl p-6">
                <div className="ps-2 mb-2 text-xl font-bold text-center">Java</div>
                <div className="flex gap-3">
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>Spring Boot</span>
                    </div>
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>Spring Data JPA</span>
                    </div>
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>Spring Security</span>
                    </div>
                </div>

            </div>
            <div className="border border-slate-200/80 rounded-xl p-6">
                <div className="ps-2 mb-2 text-xl font-bold text-center">Node</div>
                <div className="flex gap-3">
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>Express JS</span>
                    </div>
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>Next JS</span>
                    </div>
                </div>
            </div>
            <div className="border border-slate-200/80 rounded-xl p-6">
                <div className="ps-2 mb-2 text-xl font-bold text-center">Frontend</div>
                <div className="flex gap-3">
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>React JS</span>
                    </div>
                    <div className="mb-1 flex justify-start">
                        <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                        <span>Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}