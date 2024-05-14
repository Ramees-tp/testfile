import React from 'react';
import about from '../assets/images/About.jpg'
import history from '../assets/images/history.jpg'
import features from '../assets/images/features.webp'

function About() {
  return (
    <div className="container mx-auto tm:py-8 py-5 px-4">
      <h1 className="tm:text-4xl text-2xl font-bold text-center tm:mb-8 mb-4">About Us</h1>
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 md:pr-4 flex justify-center items-center">
          <img src={about} alt="About Us" className="rounded-lg mb-4" />
        </div>
        <div className="lg:w-1/2 text-gray-300 bg-gray-900 p-4 rounded-2xl">
          <p className="tm:text-lg mb-4 text-md">
            We are dedicated to connecting daily wage job seekers with opportunities to work on a daily basis. Our platform aims to provide a convenient and reliable solution for both job seekers and employers.
          </p>
          <p className="tm:text-lg mb-4 text-md">
            Our mission is to empower individuals looking for daily wage jobs by providing them with a platform to easily find work opportunities in their area. We strive to create a positive impact on the lives of job seekers by facilitating access to employment opportunities.
          </p>
          <p className="tm:text-lg mb-4 text-md">
            At our core, we believe in the value of hard work and the importance of providing equal opportunities to all individuals, regardless of their background or circumstances. We are committed to building a community where everyone has the chance to thrive and succeed.
          </p>
          <p className="tm:text-lg mb-4 text-md">
            Thank you for visiting our website and supporting our mission. Together, we can make a difference in the lives of daily wage job seekers and contribute to building a more inclusive and equitable society.
          </p>
        </div>
      </div>
      <h1 className="tm:text-4xl text-2xl font-bold text-center tm:mb-8 my-4">Our Story</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 text-gray-800 font-medium">
        <p className="tm:text-lg mb-4 text-md">
            Founded by MR Ramees Muhammad TP on April 18, 2024, our platform began as a childhood dream. Starting with just 5 workers, we have grown to provide job opportunities for more than 2000 people directly and over 5000 people indirectly.
          </p>
          <p className="tm:text-lg mb-4 text-md">
            From the early days, we have been committed to our mission, inspired by the current scenario of life. Our headquarters is located in Kochi, India, and we have multiple offices across the country. Mainly focused in Kerala.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300 bg-gray-900 p-2 rounded">Our Mission</h2>
          <p className="tm:text-lg mb-4 text-md">
            Our mission is to empower daily wage job seekers by providing them with access to reliable and fulfilling employment opportunities. We are dedicated to creating a positive impact on the lives of individuals and contributing to a more inclusive society.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300 bg-gray-900 p-2 rounded">Our Vision</h2>
          <p className="tm:text-lg mb-4 text-md">
            We envision a future where every individual has the opportunity to work and thrive, regardless of their background or circumstances. Through innovation and collaboration, we aim to build a world where everyone can achieve their full potential.
          </p>
        </div>
        <div className="lg:w-1/2 md:pl-4 flex justify-center items-center">
          <img src={history} alt="About Us" className="rounded-lg mb-4" />
        </div>
      </div>
      <h1 className="tm:text-4xl text-2xl font-bold text-center tm:mb-8 my-4">Our Speciality</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 md:pr-4 flex justify-center items-center">
          <img src={features} alt="About Us" className="rounded-lg mb-4" />
        </div>
        <div className="lg:w-1/2 text-gray-300 bg-gray-900 p-4 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Our Platform Features</h2>
          <ul className="list-disc pl-6 tm:text-lg mb-4 text-md">
            <li>Connects job seekers and employers efficiently.</li>
            <li>Offers various types of work opportunities.</li>
            <li>Focuses primarily on daily wage jobs in our local locality.</li>
            <li>Allows users to select a job type and search for available workers in the specific area selected beforehand.</li>
            <li>Provides options to filter workers based on the radius of search (8, 10, 12, or 15 miles).</li>
            <li>Enables users to filter workers based on full day or half day availability.</li>
            <li>Allows users to select the desired workday, provided the worker has an available slot on that day.</li>
            <li>Generates a secret password for security purposes upon booking.</li>
            <li>Ensures the security of user details and delivers high performance without any issues.</li>
          </ul>
          <p className="tm:text-lg mb-4 text-md">
            Our platform is designed to make the process of finding and hiring daily wage workers as simple and secure as possible. We are committed to providing a seamless experience for both job seekers and employers, ensuring that everyone can find the right opportunity or candidate quickly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

