import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { groups } from "../../data/teamData";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const PersonCard = ({ person, index = 0 }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex flex-col items-center text-center sm:items-start sm:text-left"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="relative aspect-square w-full max-w-[140px] sm:max-w-none bg-[#10181F]/5 border border-[#10181F]/10 flex items-center justify-center">
        {person.imagePath && !imgError && (
          <img
            src={person.imagePath}
            alt={person.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        {(!person.imagePath || imgError) && (
          <span className="hf-display text-2xl text-[#10181F]/30">
            {initials(person.name)}
          </span>
        )}
      </div>
      <h4 className="hf-display text-base sm:text-lg text-[#10181F] uppercase mt-4 leading-snug">
        {person.name}
      </h4>
      <p className="hf-mono mt-1 text-[9px] uppercase text-[#A6522E]">{person.role}</p>
      {person.company && (
        <p className="mt-1 text-[13px] text-[#10181F]/55">{person.company}</p>
      )}
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="hf-font relative bg-white py-20 sm:py-28">
      <style>{`
        .hf-display {
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 800;
        }
        .hf-mono {
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.06em;
        }
        .hf-team-btn {
          position: relative;
          border: 1.5px solid #C9A64A;
        }
        .hf-team-btn::before, .hf-team-btn::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          transition: all 0.25s ease;
        }
        .hf-team-btn::before {
          top: -5px; left: -5px;
          border-top: 2px solid #10181F;
          border-left: 2px solid #10181F;
          opacity: 0;
        }
        .hf-team-btn::after {
          bottom: -5px; right: -5px;
          border-bottom: 2px solid #10181F;
          border-right: 2px solid #10181F;
          opacity: 0;
        }
        .hf-team-btn:hover::before, .hf-team-btn:hover::after { opacity: 1; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="hf-mono text-[10px] uppercase text-[#A6522E]" data-aos="fade-up">
              06 Our Team
            </span>
            <h2
              className="hf-display text-4xl sm:text-5xl text-[#10181F] uppercase leading-[1.05] mt-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              The People
              <br />
              Behind Every Project.
            </h2>
            <p
              className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#10181F]/70"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Dedicated professionals who manage every phase of your
              renovation and construction project, from acquisition to
              closing.
            </p>
          </div>

          <Link
            to="/team"
            className="hf-team-btn hf-mono inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] uppercase text-[#10181F] bg-[#C9A64A] transition-all duration-300 hover:bg-[#F3EFE6] shrink-0 w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            View Full Team
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-16 space-y-16">
          {groups.map((group, gi) => (
            <div key={group.label}>
              <h3
                className="hf-mono text-[10px] uppercase text-[#8CA0AC] pb-4 border-b border-[#10181F]/10"
                data-aos="fade-up"
                data-aos-delay={gi * 50}
              >
                {group.label}
              </h3>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {group.people.map((person, pi) => (
                  <PersonCard key={person.name} person={person} index={gi * 4 + pi} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
