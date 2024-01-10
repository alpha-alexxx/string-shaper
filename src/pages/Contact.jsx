import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { render } from '@react-email/render';
import { useForm } from 'react-hook-form'


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data) => {

    console.log(data)

  }
  return (
    <div className="isolate bg-white px-6 py-12 sm:py-12 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact ME</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Are you passionate about open-source development or looking for skilled developers to bring your projects to life? We&#39;re excited to hear from you! Whether you&#39;re interested in contributing to our open-source initiatives or seeking our development services, feel free to reach out.At [Lethargic Solutions] , we believe in collaboration, innovation, and delivering exceptional results.Let&#39;s connect and explore how we can work together to achieve great things.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20" netlify>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          {/* Name */}
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-lg font-semibold leading-6 text-gray-900">
              Your name {errors.name ? <sup className='text-sm font-normal text-red-500'>*{errors.name?.message}</sup> : ''}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                {...register('name', { required: 'Your Name is required' })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
          </div>
          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
              Email {errors.email ? <sup className='text-sm font-normal text-red-500'>*{errors.email?.message}</sup> : ''}
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                autoComplete="email"
                {...register('email', { required: "Email Address is required" })}
                aria-invalid={errors.email ? "true" : "false"}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>

          </div>
          <div className="sm:col-span-2">
            <label htmlFor="comment" className="block text-lg font-semibold leading-6 text-gray-900">
              Message {errors.comment ? <sup className='text-sm font-normal text-red-500'>*{errors.comment?.message}</sup> : ''}
            </label>
            <div className="mt-2.5">
              <textarea
                name="comment"
                id="comment"
                rows={4}
                {...register('comment', { required: 'Message is required', minLength: { value: 100, message: 'Message must be at least 100 characters.' }, maxLength: { value: 500, message: 'Message field can not exceed 500 characters.' } })}
                className="block resize-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="flex items-center justify-center gap-1 w-auto md:ml-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <EnvelopeIcon className='w-6 h-6' />
            Send Mail
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact