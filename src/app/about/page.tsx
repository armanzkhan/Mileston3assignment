import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="w-full pt-20 lg:pt-40 lg:px-8 pb-8 bg-custom3 bg-opacity-50 overflow-x-hidden">
        {/* main div which'll separate left/right sections */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* left section, (image) */}
          <div className="w-[100%] lg:w-[50%] flex justify-center px-3 sm:px-0 lg:flex-none lg:pt-14 xl:pt-0">
            <Image
              src="/images/about.jpg"
              alt="about banner"
              width={600}
              height={600}
            />
          </div>
          {/* right section, (text) */}
          <div className="w-[100%] lg:w-[50%] px-4">
            <h1 className="text-3xl py-10 lg:py-0 lg:text-4xl xl:text-5xl font-bold text-center underline underline-offset-4">
              About My Blog
            </h1>

            <p className="text-lg lg:pt-8 sm:px-5 md:px-20 lg:px-0 xl:pt-10 font-bold text-custom2">
              Welcome to My Blog,
            </p>
            <p className="text-lg  font-medium sm:px-5 md:px-20 lg:px-0">{`Discover stories, ideas, and insights that spark curiosity and inspire growth.`}</p>
            <p className="text-lg sm:px-5 md:px-20 lg:px-0 text-custom2 font-bold pt-6 lg:pt-5 xl:pt-8">{`Mystick ability?`}</p>
            <p className="text-lg sm:px-5 md:px-20 lg:px-0 pt-3 font-medium">{`Mystick captivates with its ability to inspire imagination and bring a touch of magic to everyday experiences.`}</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-custom2 pt-20 pb-10 text-center">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-around px-4">
            <div className="flex flex-col mb-10 lg:mb-0 items-center lg:w-[30%]">
              <Image
                src="/avatar/john.jpg"
                alt="author1"
                width={500}
                height={500}
                className="rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-custom2 pt-3">Abdul Rehman</h3>
              <p className="text-sm text-center">Co-founder & CEO</p>
            </div>
            <div className="flex flex-col mb-10 lg:mb-0 items-center lg:w-[30%]">
              <Image
                src="/avatar/olivia.jpg"
                alt="author2"
                width={500}
                height={500}
                className="rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-custom2 pt-3">
                Bint e Hawa
              </h3>
              <p className="text-sm text-center">Creative Director</p>
            </div>
            <div className="flex flex-col mb-10 lg:mb-0 items-center lg:w-[30%]">
              <Image
                src="/avatar/david.jpg"
                alt="author3"
                width={500}
                height={500}
                className="rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-custom2 pt-3">
                Ahsan Najam
              </h3>
              <p className="text-sm text-center">Lead Developer</p>
            </div>
          </div>
        </div>
        <div className="bg-custom3/30 py-10 mx-3 rounded-[20px] mt-20">
          <h2 className="text-3xl font-bold text-custom2 pb-10 text-center">
            Our Mission
          </h2>
          <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
            {`Our mission is to empower creativity, foster innovation, and deliver impactful solutions. As a team, we are dedicated to building a platform that inspires ideas, connects communities, and drives meaningful change through collaboration and excellence.`}
          </p>
        </div>
        <div className="bg-custom3/30 py-10 mx-3 rounded-[20px] mt-20">
          <h2 className="text-3xl font-bold text-custom2 pb-10 text-center">
            Our Vision
          </h2>
          <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
            {`Our vision is to empower creativity, foster innovation, and deliver impactful solutions. As a team, we are dedicated to building a platform that inspires ideas, connects communities, and drives meaningful change through collaboration and excellence.`}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-custom2 pt-20 pb-10 text-center">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
              {`Have a question or comment? We'd love to hear from you! Feel free to reach out to us at `}
            </p>
            <span className="text-custom2 font-bold">contact@myblog.com</span>
            <span className="text-custom2 font-bold"></span>
          </div>
        </div>
       
      </main>
    </>
  );
}
