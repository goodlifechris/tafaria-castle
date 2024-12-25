import React from 'react';
import { Montaga } from 'next/font/google';

export interface Session {
    title: string;
    description: string;
  }
  
//👇 Configure our font object
const montaga = Montaga({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
  
const SessionList = ({sessions}:{sessions:Session[]}) => {
//   const [sessions, setSessions] = useState([]);


  return (
    <div className="session-list mb-4">
      {/* <h1 className="text-3xl font-bold text-center my-8">Sessions</h1> */}
      <ul className="list-disc pl-5 mb-5">
        {sessions.map((session, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-xl font-semibold text-[#902729]">{session.title}</h2>
            <p className={`text-gray-700 ${montaga.className}`}>{session.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;