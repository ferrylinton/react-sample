import authorJpg from "../assets/images/author.jpg";

export default function Profile() {
  return (
    <div className='w-full max-w-3xl py-[100px] flex flex-col items-center'>
      <img
        className="w-44 h-44 border-2 border-gray-200 object-cover object-center rounded-full shadow-lg antialiased"
        src={authorJpg} />
      <div className='text-center mt-8'>
        <div className='text-3xl'>Horas, I'm Ferry</div>
        <div className='text-4xl font-bold uppercase my-4'>Sofware Developer</div>
        <div className='text-xl font-bold mb-5'>from Toba, Indonesia</div>
        <div className="text-xl max-w-lg">
          Hi,  I'm a Sofware Developer, and I'm very passionate and dedicated to my work. 
          With more than 10 years of experience working on projects using Java (Web Application and Middleware Application), 
          with this time period I have acquired the skills and knowledge necessary to make your project a success.
        </div>
      </div>
    </div>
  )
}