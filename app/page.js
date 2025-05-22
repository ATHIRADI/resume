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
            <h1 className="text-xl mb-6">
              Hello, I'm <br />
              <span className="text-accent h2">Arun Kumar</span>
            </h1>

            <div className="mb-9 space-y-5">
              <p className="max-w-[800px] text-white/80">
                Web & Mobile App Developer with hands-on experience building
                real-world projects using{" "}
                <span className="text-accent">
                  HTML, CSS, JavaScript, React.js, Next.js, Flutter, Firebase,
                  Node.js, and PHP.
                </span>{" "}
                Completed BCA in 2016 and a MERN Stack course in 2022.
              </p>
             {/* <p className="max-w-[600px] text-white/80">
                 Eager to join a professional team and contribute with practical,
                 self-learned development experience. Passionate about clean UI
                design, smooth performance, and modern development practices.
               </p> */}
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
