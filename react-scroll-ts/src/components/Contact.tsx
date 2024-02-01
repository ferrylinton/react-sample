import AddressIcon from "../icons/AddressIcon";
import ContactIcon from "../icons/ContactIcon";
import GithubIcon from "../icons/GithubIcon";

export default function Contact() {
  return (
    <>
      <ContactIcon className="element-bg" />
      <div className="z-10 flex flex-col items-center gap-5">
        <div className="text-4xl font-bold">Contact Me</div>
        <ContactIcon className="w-[30px] h-[30px]" />
        <div className="text-3xl font-thin">ferrylinton@gmail.com</div>
        <GithubIcon className="w-[30px] h-[30px]" />
        <div className="text-3xl font-thin"><a href="https://github.com/ferrylinton">ferrylinton</a></div>
        <AddressIcon className="w-[30px] h-[30px]" />
        <div className="text-3xl font-thin">Toba, Sumatera Utara, Indonesia</div>
      </div>
    </>
  )
}