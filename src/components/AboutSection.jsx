import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="flex justify-center mb-8">
          <img
            src="/Pas foto.png"
            alt="My Profile"
            className="w-50 h-58 object-cover border-4 border-primary shadow-lg mx-auto rounded-xl 
                      transform transition duration-300 hover:scale-110"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web and Application Developer
            </h3>

            <p className="text-muted-foreground">
              With over two years of academic experience at Binus University, I have developed skills in building both websites and mobile applications. I specialize in creating well-structured, functional, and visually appealing digital solutions.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems, and I continuously explore new technologies to stay at the forefront of the digital landscape. Beyond web and mobile development, I am also deeply interested and experienced in the fields of cryptocurrency and Web3, where I enjoy applying innovative technologies to real-world use cases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/CV/CV - Wilsen Angelo Laisan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary font-medium 
                          relative overflow-hidden group"
              >
                <span className="relative z-10 text-purple-500 group-hover:text-white transition-colors duration-300">
                  Download CV
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 
                                translate-x-[-100%] group-hover:translate-x-0 
                                transition-transform duration-500 ease-out"></span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web and Application Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cryptocurrency and Web3</h4>
                  <p className="text-muted-foreground">
                    Exploring decentralized technologies, building innovative blockchain-based solutions, and integrating modern financial systems into real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
