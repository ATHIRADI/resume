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
              <span className="text-accent h2">Arun Kumar</span>
            </h1>

            <div className="mb-9 space-y-5">
              {/* <p className="max-w-[800px]  text-white/80">
                I am a dedicated{" "}
                <span className="text-accent"> Flutter Developer </span> with
                two years of experience creating beautiful and functional mobile
                apps. I specialize in building robust, user-friendly
                applications with a strong focus on eye-catching UI designs and
                high performance. I've worked in various industries, including
                finance, healthcare, and e-commerce, helping businesses grow
                while delivering great user experiences.{" "}
              </p>
              <p className="max-w-[600px]  text-white/80">
                I stay current with the latest trends in the Flutter ecosystem
                and am committed to continuous learning and mentoring others.
                Let's connect and bring your ideas to life!
              </p> */}

              <p className="max-w-[800px]  text-white/80">
                I am a passionate{" "}
                <span className="text-accent"> Flutter Developer </span> eager
                to create functional and visually appealing mobile applications.
                Focusing on clean UI designs and smooth performance, I strive to
                deliver user-friendly apps that adhere to modern standards.
              </p>
              <p className="max-w-[600px]  text-white/80">
                I continuously learn and keep up with the latest trends in the
                Flutter ecosystem to improve my skills and contribute
                effectively to projects. Let's connect and turn your ideas into
                reality!
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
