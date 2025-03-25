import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready With AI-Powered Practice And Feedback</h2>
          <p className='text-lg'>
            Practice on real interview questions and get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src='/robot.png'
          alt='robot'
          width={400}
          height={400}
          className='max-sm:hidden'
        />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interview</h2>
        <div className='interviews-section'>
          <InterviewCard
            key={1}
            techStack={["React", "js", "angular"]}
            type='Mixed'
            role='full stack'
          />
          <InterviewCard
            key={2}
            techStack={["React", "js", "angular"]}
            type='Mixed'
            role='full stack'
          />
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take Interview</h2>

        <div className='interviews-section'>
          <InterviewCard
            key={3}
            techStack={["React", "js", "angular"]}
            type='Mixed'
            role='full stack'
          />
          {/* <p>there are no interviews available</p> */}
        </div>
      </section>
    </>
  );
}

export default page;
