import styled, { keyframes } from "styled-components";
import React from "react";
import { useLang } from '../../../contexts/Langcontexts';  
import languageMap from '../../../languageMap';
import { FaLinkedin } from "react-icons/fa"; // ✅ logo LinkedIn

interface TeamMember {
  photo: string;
  name: string;
  position: string;
  linkedin: string;
}

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
`;

const BlinkButton = styled.a`
  animation: ${blink} 1.5s infinite;
  background: #0A66C2;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    background: #084a8f;
  }
`;

const teamMembers: TeamMember[] = [
  {
    photo: "/img/team/frame1.png",
    name: "Hayyanuddin Al-Barokah",
    position: "Founder & CEO",
    linkedin: "https://id.linkedin.com/in/hayyanudin-albarokah-cbes-b81286229",
  },
  {
    photo: "/img/team/frame3.png",
    name: "Raffi Muhammad ",
    position: " Expert Export Consultant & CMO",
    linkedin: "https://id.linkedin.com/in/muhammad-syahrafiuddin-34107440",
  },
  {
    photo: "/img/team/frame4.png",
    name: "Danil aprisenta",
    position: "Sourcing Manager",
    linkedin: "https://id.linkedin.com/in/danil-aprisenta-451797131",
  },
  {
    photo: "/img/team/frame5.jpg",
    name: "Rahmat Maulana",
    position: "Web Developer",
    linkedin: "https://id.linkedin.com/in/mattmwln",
  },
  {
    photo: "/img/team/frame7.png",
    name: "Novia Anggita",
    position: "Financial Manager",
    linkedin: "https://id.linkedin.com/in/noviaanggita",
  },
  {
    photo: "/img/team/frame2.png",
    name: "Ahmad Thabrani",
    position: "Chief Business officer",
    linkedin: "https://id.linkedin.com/in/ahmadthabrani007",
  },
  {
    photo: "/img/team/frame6.png",
    name: "Nadhif shohibul kaffi",
    position: "Supply chain & Logistic",
    linkedin: "https://id.linkedin.com/in/nadhif-shohibul-kaffi",
  },
];

const OurTeam: React.FC = () => {
  const { language } = useLang();
  return (
    <div className="text-center py-40 text-gray-800">
      {/* Opening Section */}
      <section className="mb-12 px-6">
        <h1 className="text-5xl font-extrabold text-gray-800">{languageMap[language].text5}</h1>
        <p className="text-lg mt-4 leading-relaxed text-gray-700 max-w-2xl mx-auto">
          {languageMap[language].text37}
        </p>
      </section>
      <div className="wrapper">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-border-top"></div>
            <div
              className="img"
              style={{ backgroundImage: `url(${member.photo})` }}
            ></div>
            <span>{member.name}</span>
            <p className="job">{member.position}</p>
            <BlinkButton href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} /> Connect
            </BlinkButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
