/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import RichTextRenderer from "./richtextrenderer";
import { Suspense } from "react";
import {  Parisienne } from 'next/font/google'

const GET_ABOUTS_INTRO = gql`
  query GET_ABOUTS_INTRO {
    abouts {
      name
      title
      content {
        document
      }
    }
  }
`;

type About = {
  name: string;
  title: string;
  content: {
    document: any;
  };
};

type AboutsIntroData = {
  abouts: About[];
};

const fetchAboutsIntro = async (): Promise<AboutsIntroData> => {
  const endpoint = "https://tafaria.com/api/graphql";
  return request(endpoint, GET_ABOUTS_INTRO);
};
//👇 Configure our font object
const parisienne = Parisienne({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const AboutsIntro = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["aboutsIntro"],
    queryFn: fetchAboutsIntro,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  const abouts = data?.abouts || [];

  return (
    <Suspense
      fallback={
        <div className="flex justify-center p-4">
          <div className="animate-pulse">Loading...</div>
        </div>
      }
    >
      <div className=" flex justify-center ">
      <div className="p-6 max-w-3xl mx-auto text-center">
        {abouts.map((about, index) => (
          <div key={index} className="mb-6">
            <h2 className={`text-2xl font-bold text-[#94723C] ${parisienne.className}`}>{about.name}</h2>
            <h3 className="text-l mt-2 text-[#902729] ">{about.title}</h3>
            <div className="mt-4 text-gray-700">
              <RichTextRenderer document={about.content.document} />
            </div>
          </div>
        ))}
  

    <br/>
    <p className={`${parisienne.className} text-[#94723C] text-2xl`} >
    George Tafaria
    </p>
      </div>
      </div>
  
    </Suspense>
  );
};

export default AboutsIntro;
