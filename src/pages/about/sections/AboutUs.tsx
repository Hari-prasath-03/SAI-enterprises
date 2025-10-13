import { engineerImage } from "../../../assets"
import Button from "../../../components/ui/Button"
import CountUp from "../../../components/ui/CountUp"
import Reveal from "../../../components/ui/Reveal"

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full relative">
            <img
              src={engineerImage}
              alt="Engineer"
              className="h-[480px] shadow-lg"
            />
            <div className="absolute bg-blue-900/70 bottom-0 left-0 p-5 text-white">
              <CountUp
                className="text-7xl font-black px-5"
                targetNumber={25}
                showPlusOnAnimationEnd
              />
              <p className="ml-3 uppercase">years of experience</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <Reveal>
              <p className="text-sm mb-3 font-semibold text-red tracking-wider uppercase">
                About us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                We’re providing the best <br className="hidden sm:block"/>
                <span className="text-gray-900">customer service</span>
              </h2>
            </Reveal>
            <div className="bg-gray-50 p-5">
              <Reveal className="text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Reveal>
              <Reveal className="mt-4 font-semibold text-gray-800">John Doe, CEO</Reveal>
            </div>

            <Button className="bg-red">Learn more</Button>
          </div>
        </div>
      </section>
  )
}

export default AboutUs