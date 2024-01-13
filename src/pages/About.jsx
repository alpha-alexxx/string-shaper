import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'
const ABOUT_DATA = {
  features: {
    simple_manipulation: [
      {
        name: 'Uppercase',
        description: 'Convert text to uppercase.'
      },
      {
        name: 'Lowercase',
        description: 'Convert text to lowercase.'
      },
      {
        name: 'Capitalize',
        description: 'Capitalize the first letter of each word.'
      },
      {
        name: 'Alternation',
        description: 'Alternate the case of each character.'
      },
      {
        name: 'Trim Space',
        description: 'Remove extra spaces from the text.'
      },
      {
        name: 'Reverse Text',
        description: 'Reverse the sequence of characters.',
        new: true
      },
    ],
    cryptic_manipulation: [

      { name: 'Encode Text(base64)', description: 'Convert text to Base64 encoding.', new: true },
      { name: 'Decode Text(base64)', description: 'Decode Base64 encoded text.', new: true },
      { name: 'Encode Text(binary)', description: 'Convert text to binary format.', new: true },
      { name: 'Decode Text(binary)', description: 'Convert binary format back to text.', new: true }
    ]
  },
  technologies: [
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces, particularly single-page applications where UI state management is crucial.',
      svgBadge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      website: 'https://react.dev/'
    },
    {
      name: 'React Router DOM',
      description: 'A popular routing library for React applications, enabling dynamic routing and navigation.',
      svgBadge: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
      website: 'https://reactrouter.com/'
    },
    {
      name: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapidly building custom user interfaces. It allows for building designs directly in the markup.',
      svgBadge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
      website: 'https://tailwindcss.com/'
    },
    {
      name: 'Headless UI',
      description: 'A set of completely unstyled, fully accessible UI components, designed to integrate with Tailwind CSS and other CSS frameworks.',
      svgBadge: 'https://img.shields.io/badge/Headless_UI-blue?style=for-the-badge&logo=headlessui',
      website: 'https://headlessui.com/'
    },
    {
      name: 'React Form Hook',
      description: 'React Hook Form is a lightweight React library for form management using hooks, emphasizing efficient validation and performance. It simplifies complex form states and integrates seamlessly with React components.',
      svgBadge: 'https://img.shields.io/badge/React_Hook_Form-000?style=for-the-badge&logo=react-hook-form&logoColor=FF5BCB',
      website: 'https://headlessui.com/'
    },
    {
      name: 'React Email',
      description: 'A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript.',
      svgBadge: 'https://img.shields.io/badge/React_Email-000?style=for-the-badge&logo=react&logoColor=white',
      website: 'https://react.email/'
    }
  ]
};



const About = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12 ">
      <h1 className="my-3 text-3xl font-bold md:text-5xl">About Us:</h1>
      <hr />
      <div className="container flex flex-col justify-center items-stretch" >
        <div className="flex flex-col md:flex-row-reverse items-center py-5">
          <img className='w-[30rem] rounded-xl shadow-md' src='https://iili.io/J7WUkHx.webp' alt='string shaper' />
          <div className="flex flex-col items-center justify-center  gap-4 mt-8 md:mt-2">
            <div className='flex flex-row gap-2'>
              <p className="inline-flex items-center rounded-md btn-primary px-2 py-1 text-[14px] font-medium text-white ring-1 ring-inset ring-gray-400/10">Ankit Kumar - Student/Web Developer</p>
              <p className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-[14px] font-medium text-black ring-1 ring-inset ring-pink-700/10">First Project</p>
            </div>
            <h1 className="mt-2 grid place-content-center">
              <Logo className={'w-96'} />
            </h1>
            <p className="text-center font-medium text-lg">
              String Shaper is a comprehensive text utility designed to offer users a plethora of text manipulation and transformation options. Originally created as a Simple Text Utility on February 9, 2023, it has evolved into String Shaper v2.0.0 with a more refined UI and advanced functionalities.
            </p>
            <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-base font-medium text-white ring-1 ring-inset ring-pink-700/10">This project is part of his learning process.</span>
          </div>
        </div>
        {/*  */}
        <div>
          <h2 className='text-2xl md:text-3xl font-bold'>Features:</h2>
          <ol className='text-xl p-2 list-decimal mr-8 flex flex-col items-center justify-around md:flex-row'>
            <li>
              <ul className='font-bold list-disc'>
                Simple Manipulation:
                {ABOUT_DATA.features.simple_manipulation.map(feature => (
                  <li className='text-gray-500 capitalize font-medium ml-8' key={feature.name}>
                    <span className='font-bold text-black'>{feature.name}: </span>
                    {feature.description}
                    {feature?.new && <p className='inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-600/20'>New</p>}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul className='font-bold list-disc'>
                Cryptic Manipulation:
                {ABOUT_DATA.features.cryptic_manipulation.map(feature => (
                  <li className='text-gray-500 capitalize font-medium ml-8' key={feature.name}>
                    <span className='font-bold text-black'>{feature.name}: </span>
                    {feature.description}
                    {feature?.new && <p className='inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-600/20'>New</p>}
                  </li>
                ))}
              </ul>
            </li>
          </ol>
          <h2 className='text-2xl md:text-3xl mt-4 font-bold'>Used Technologies:</h2>
          <table className=" mt-2 min-w-full border-2 divide-y divide-gray-400">
            <thead className="bg-gray-50 ">
              <tr className=' text-left text-base divide-x divide-gray-400'>
                <th scope="col" className="px-3 py-3.5  font-semibold text-gray-900">
                  Technology
                </th>
                <th scope="col" className="px-3 py-3.5 font-semibold text-gray-900">
                  Description
                </th>

              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {ABOUT_DATA.technologies.map(tech => (
                <tr key={tech.name} className='text-lg  text-left divide-x divide-gray-400'>
                  <td className="whitespace-nowrap mx-auto px-3 py-4 text-gray-500">
                    <Link to={tech.website} target="_blank" className='active:scale-95'>
                      <img src={tech.svgBadge} alt={tech.name} className='h-8 w-32 rounded shadow-md active:scale-95' />
                    </Link>
                  </td>
                  <td className="break-words px-3 py-4 text-gray-500">{tech.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default About