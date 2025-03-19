import {useState} from 'react';

function About() {
    return (
        <>
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
              
                <h2>Career Goals</h2>
                <p>
                  As a cyber security student, I would like to gain as much experience as possible, I think joining a
                  team as a junior security analyst would best help me with that goal. Personally, my goal is to
                  specialize in network and cloud security.
                  Becoming certified in network security is something I would like to do through out my career.
                  The next certifications I believe will be most helpful in broadening my understanding are:
                </p>
                <ul>
                  <li>Cisco’s CCT  </li>
                  <li>CompTIA CySA+</li>
                  <li>Cisco’s CCNA </li>
                </ul>
                <p>
                  Cisco certified technician certificate will provide entry level experience with industry leading
                  hardware. Completing these foundational certifications while working in a junior analyst
                  position will help me secure a strong foundation for secure networking. I expect doing these
                  certifications and acquiring at least two years of industry experience will be necessary for taking
                  my CySA+ and CCNA exams.
                  Additionally, becoming more familiar with M365 and AWS is an important step for achieving my
                  careers goals. So, throughout this process, I will also be looking into Microsoft’s M365 and
                  Azure learning modules and certifications.
                </p>
                <h2>Certifications and Education</h2>
    
                <h5>Cyber Security Diploma</h5>
                <p>
                  Upon completion of my diploma, in cyber security I consider myself to be a knowledgeable individual with
                  the skills needed to be successful in the IT industry. I believe that one’s education is never truly over and
                  continue to pursue education in the form of a bachelor's degree and various certifications. Having completed
                  the cyber security diploma, however, has prepared me with necessary research and documentation skills to
                  effectively pursue growth and development.
                </p>
    
                <h5>Security+</h5>
                <p>
                  Completing my Security+ certification whilst still in school, is a major point of pride for me and demonstrates
                  my willingness to learn and self driven attitude. I began studying for this certification during the end of my
                  first semester in the program, and finally achieved it in my first semester of second year. Much of what I
                  learned in my program I found to be directly applicable to the certificate but with a greater depth of
                  knowledge. I also found that studying for this certificate exposed me to many concepts that were not fully
                  covered during the program. Cloud security was one of these concepts, looking into cloud security is now one
                  of my major career interests that I am looking forward to pursuing.
                </p>
    
                <h5>Network+</h5>
                <p>
                  I completed my Network+ certification inbetween my final work-term at Pratt and Whitney and the start of
                  the fall 2024 semester at Dalhousie University. Completing this certification gave me a strong foundational
                  understanding of LAN/WAN networks as well as the various protocols, specifications, and devices involved
                  in networking. Having a particular interest in secure networking I took special note of how techniques such as
                  whitelisting/blacklisting, edge/jump servers, and Demiliterized zones (DMZ's) are used in protecting a company's
                  network. This journey also lead to me learning and pursuing topics outside of the scope of learning objectives for
                  Network+. Particularily learning about the Purdue model and how it relates to busineses that use various levels
                  of control systems.
                </p>
              </div>
            </div>
          </div>
        </>
      );
}

export default About;