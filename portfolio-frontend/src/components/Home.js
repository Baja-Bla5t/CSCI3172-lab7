import {useState} from 'react';

function Home() {
    return (
        <>
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <h2>About me</h2>
                  <p>
                    I am a dedicated computer science student who specializes in cyber security. I have a
                    aptitude for object-oriented programming mainly Java and C++, and an interest in secure
                    networking.
                    In my spare time I like to keep busy with various projects, like writing a java program
                    that will encode and decode morse code. I maintain and modify a testing environment as a sort
                    of home lab. This environment consists of a primary domain controller running windows server
                    2022, a virtual machine server using VMware on windows server 2022, and a workstation using
                    windows 10 pro. I maintain these on a network separated from my home network using a
                    Fortinet FortiGate 60D physical firewall. I find having a large sandbox environment like this is
                    great for testing and learning about different systems and how they interact.
                  </p>
              </div>
            </div>
          </div>
        </>
      );
}

export default Home;