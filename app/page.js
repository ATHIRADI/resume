"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import States from "@/components/States";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FiPhoneCall } from "react-icons/fi";

const Home = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className=" text-xl mb-6 ">
              Hello, I'm <br />{" "}
              <span className="text-accent h1">Arun Kumar</span>
            </h1>

            <div className="mb-9 space-y-5">
              <p className="max-w-[600px]  text-white/80">
                I am a highly motivated and results-oriented software developer
                with over 2 years of experience in building modern web and
                mobile applications. </p>
              <p className="text-white/80">My expertise includes:</p>
              <ul className="md:list-disc pl-5  text-white/80">
                <li>
                  <span className="font-bold text-accent">React & Next.js</span>{" "}
                  - Crafting dynamic and responsive user interfaces.
                </li>
                <li>
                  <span className="font-bold text-accent">MERN Stack</span> -
                  Proficient in MongoDB, Express.js, React.js, and Node.js for
                  full-stack development.
                </li>
                <li>
                  <span className="font-bold text-accent">Flutter</span> -
                  Developing cross-platform mobile applications.
                </li>
              </ul>
              <p className="max-w-[600px]  text-white/80">
                Explore my work, and let's create something amazing together!
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
                size="lg"
                onClick={handleContactClick}
              >
                <span>Contact Me</span>
                <FiPhoneCall className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <States />
    </section>
  );
};

export default Home;
