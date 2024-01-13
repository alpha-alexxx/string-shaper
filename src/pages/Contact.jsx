import { ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { renderToStaticMarkup } from 'react-dom/server';
import { useState } from 'react';
import { Notification, EmailTemplate } from '../components';

const Contact = () => {
  const [show, setShow] = useState(false)
  const [information, setInformation] = useState({
    type: '',
    title: '',
    body: ''
  })
  const [isSending, setSending] = useState(false)
  const { register, handleSubmit, watch, formState: { errors }, } = useForm()
  const onSubmit = async (data) => {
    const { name, email, subject, } = data
    const message = renderToStaticMarkup(<EmailTemplate {...data} />)
    try {
      setSending(true)
      const response =
        await axios
          .post('https://hungry-cyan-headscarf.cyclic.app/api/v1/send-mail', {
            name,
            website: 'String Shaper',
            email,
            subject,
            message: message
          })
      const { title, body, type } = response.data
      setInformation({
        type: type,
        title: title,
        body: body
      })
    } catch (err) {
      console.log(err)
      setInformation({
        type: 'error',
        title: err.message,
        body: `Mr. ${watch('name')}, We got an Server Error. Please try again.`
      })
    } finally {
      setSending(false)
      setShow(true)

      setTimeout(() => {
        setShow(false)
        setInformation({ type: '', title: '', body: '' })
      }, 5000);
    }
  }

  return (
    <div className="isolate bg-white lg:px-6 lg:py-6 py-8 px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] z-[-10] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
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
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact me</h2>
      <div className='grid w-full md:grid-cols-2 gap-4'>

        <div className="flex justify-center items-start max-w-2xl">
          <p className="mt-2 text-lg text-center leading-8 text-gray-600">
            Are you passionate about open-source development or looking for skilled developers to bring your projects to life? We&#39;re excited to hear from you! Whether you&#39;re interested in contributing to our open-source initiatives or seeking our development services, feel free to reach out.At [Lethargic Solutions] , we believe in collaboration, innovation, and delivering exceptional results.Let&#39;s connect and explore how we can work together to achieve great things.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full md:max-w-xl" action='/netlify/functions/sendMail'>
          <div className="grid grid-cols-1 gap-y-6 w-full">
            <div className="grid md:grid-cols-2  gap-x-2">
              {/* Name */}
              <div className="sm:col-span-2 md:col-span-1 w-full">
                <label htmlFor="first-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  Your name {errors.name ? <sup className='text-sm font-normal text-red-500'>*{errors.name?.message}</sup> : <span className='text-xl font-bold text-red-500' title='required'>*</span>}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder='Ankit Kumar'
                    {...register('name', { required: 'Your Name is required' })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2 md:col-span-1 w-full">
                <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
                  Email {errors.email ? <sup className='text-sm font-normal text-red-500'>*{errors.email?.message}</sup> : <span className='text-xl font-bold text-red-500' title='required'>*</span>}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder='1243@example.com'
                    {...register('email', { required: "Email Address is required" })}
                    aria-invalid={errors.email ? "true" : "false"}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>
            </div>
            {/* Subject */}
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-lg font-semibold leading-6 text-gray-900">
                Email Subject: {errors.subject ? <sup className='text-sm font-normal text-red-500'>*{errors.subject?.message}</sup> : <span className='text-xl font-bold text-red-500' title='required'>*</span>}
              </label>
              <div className="mt-2.5">
                <input
                  type="subject"
                  id="subject"
                  placeholder='Enter email subject here...'
                  autoComplete="email"
                  {...register('subject', { required: "Subject is required", minLength: { value: 10, message: 'Subject field can not be less than 10 characters.' } })}
                  aria-invalid={errors.subject ? "true" : "false"}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                />
              </div>

            </div>
            <div className="sm:col-span-2">
              <label htmlFor="comment" className="block text-lg font-semibold leading-6 text-gray-900">
                Message {errors.comment ? <sup className='text-sm font-normal text-red-500'>*{errors.comment?.message}</sup> : <span className='text-xl font-bold text-red-500' title='required'>*</span>}
              </label>
              <div className="mt-2.5">
                <textarea
                  name="comment"
                  id="comment"
                  placeholder='Write your message here...(Min. 40 character Max.: 500 Character)'
                  rows={4}
                  {...register('comment', { required: 'Message is required', minLength: { value: 40, message: 'Message must be at least 100 characters.' }, maxLength: { value: 500, message: 'Message field can not exceed 500 characters.' } })}
                  className="block resize-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                />
                <p className='text-right text-slate-500 font-medium text-sm'>{watch('comment') ? watch('comment')?.length : 0}/500</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="flex flex-row items-center justify-center gap-1 w-auto md:ml-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {
                isSending ?
                  <span className='flex items-center justify-center'>
                    <ArrowPathIcon className='w-6 h-6 animate-spin font-bold' />
                    Sending...
                  </span>
                  : <span className='flex items-center justify-center'>
                    <EnvelopeIcon className='w-6 h-6' />
                    Send Mail
                  </span>
              }

            </button>
          </div>
        </form>
      </div>

      {isSending &&
        <>
          <p className='bg-slate-500/50 fixed inset-0 justify-center flex items-center font-extrabold text-2xl text-slate-900'>
            <ArrowPathIcon className='w-10 h-10 animate-spin' />
            Sending...
          </p>

        </>
      }
      <Notification show={show} setShow={setShow} information={information} />
    </div>
  )
}

export default Contact