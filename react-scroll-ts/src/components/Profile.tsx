import authorJpg from "../assets/images/author.jpg";
import ProfileIcon from "../icons/ProfileIcon";

export default function Profile() {
  return (
    <div className='w-full max-w-3xl flex flex-col items-center'>
      <ProfileIcon className="element-bg" />
      <img
        className="w-52 h-52 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border border-gray-500 p-1 bg-white object-cover object-center rounded-full antialiased"
        src={authorJpg} />
      <div className='text-center mt-8'>
        <div className='text-2xl sm:text-3xl uppercase'>Horas, I'm Ferry</div>
        <div className='text-3xl sm:text-4xl font-bold uppercase my-2 sm:my-4 text-green-600 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]'>Sofware Developer</div>
        <div className='text-xl font-bold mb-5 uppercase'>from Toba Samosir, Indonesia</div>
        <div className="px-2 sm:px-0 text-lg sm:text-xl max-w-lg">
          Hi,  I'm a Sofware Developer, and I'm very passionate and dedicated to my work. 
          With more than 10 years of experience working on projects using Java (Web Application and Middleware Application), 
          with this time period I have acquired the skills and knowledge necessary to make your project a success.
        </div>
      </div>
    </div>
  )
}