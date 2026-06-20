import { FadeIn } from "./UI";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    name: "Agentic AI",
    description: "Building multi-agent systems and AI workflows that can reason, plan, and execute tasks using tools, APIs, and modern LLM frameworks."
  },
  {
    id: "02",
    name: "Machine Learning",
    description: "Developing predictive models and data-driven systems using Python, focusing on real-world problem solving rather than just theory."
  },
  {
    id: "03",
    name: "Web Development",
    description: "Creating responsive and performance-optimized web applications using React, JavaScript, and modern frontend/backend stacks."
  },
  {
    id: "04",
    name: "AI Automation",
    description: "Designing automation pipelines that connect APIs, tools, and workflows to remove repetitive tasks and improve efficiency."
  },
  {
    id: "05",
    name: "LLM Applications",
    description: "Working with large language models to build chatbots, research tools, and intelligent text-based applications."
  }
];

export function Services() {
  return (
    <section 
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-20 text-[#0C0C0C]"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Services Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40} tagName="div">
            <h2 
              className="text-[#0C0C0C] font-black uppercase text-center"
              style={{ fontSize: "clamp(3rem, 11vw, 140px)" }}
            >
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Vertical Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} className="border-b border-[rgba(12,12,12,0.15)]">
              <FadeIn delay={index * 0.1} y={30} tagName="div">
                <div className="flex flex-row items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 group hover:bg-[#0C0C0C]/[0.02] px-4 transition-colors duration-250">
                  
                  {/* Left Huge Service Number */}
                  <span 
                    className="font-black leading-none select-none text-[#0C0C0C] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 110px)", minWidth: "clamp(60px, 12vw, 150px)" }}
                  >
                    {service.id}
                  </span>

                  {/* Right Description text & name */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <h3 
                      className="font-medium uppercase text-[#0C0C0C] leading-tight select-none"
                      style={{ fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)" }}
                    >
                      {service.name}
                    </h3>
                    <p 
                      className="font-light leading-relaxed text-[#0C0C0C]/70"
                      style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", maxWidth: "44rem" }}
                    >
                      {service.description}
                    </p>
                  </div>

                </div>
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
