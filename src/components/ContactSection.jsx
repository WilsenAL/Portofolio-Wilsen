import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Card Contact Information di Tengah */}
        <div className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg text-center max-w-xl mx-auto space-y-8">
          <h3 className="text-2xl font-semibold text-foreground">
            Contact Information
          </h3>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Email
                </p>
                <a
                  href="mailto:wilsen1823@gmail.com"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  wilsen1823@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Phone / WhatsApp
                </p>
                <a
                  href="https://wa.me/6281211935393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  +62 812-1193-5393
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Location
                </p>
                <span className="text-foreground font-medium">
                  Jakarta Barat, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-sm font-medium text-muted-foreground mb-4">
              Connect With Me
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/wilsen-a-laisan-1a8803384"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/wilsenangeloo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/WilsenAL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};