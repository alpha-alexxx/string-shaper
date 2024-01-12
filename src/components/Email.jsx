import { Html, Head, Tailwind } from "@react-email/components";
const Email = ({ data }) => {
  const { name, email, subject, comment, } = data
  return (

    <Html lang="en" dir="ltr">
      <Head>
        <title>{'Message From StringShaper'}</title>
      </Head>
      <Tailwind>
        <div className="bg-gray-100/80 rounded-md border-2 border-gray-300/30 shadow-md p-2 break-words">
          <h3 className="text-lg font-[800] font-[Urbanist] text-gray-400">
            Sender name: <span className='text-gray-800'>{name}</span>
          </h3>
          <h3 className="text-lg font-[800] font-[Urbanist] text-gray-400">
            From: <span className='text-gray-800'>{email}</span>
          </h3>
          <h4 className="text-lg font-[800] font-[Urbanist] text-gray-400">
            Subject: <span className='text-gray-800'>{subject}</span>
          </h4>
          <section className='font-medium text-lg break-words font-[Urbanist]'>
            <p>{comment}</p>
          </section>
          <footer className='w-full flex text-center font-bold text-green-500'>
            <p className='text-center'>❤️ Mail From String Shaper ❤️</p>
          </footer>
        </div>

      </Tailwind>
    </Html>
  )
}

export default Email