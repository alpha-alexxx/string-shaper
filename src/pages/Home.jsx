import React, { useCallback, useEffect, useState } from 'react'

const Home = () => {
  const [text, setText] = useState('')
  const [counter, setCounter] = useState({
    letter: 0,
    word: 0,
    line: 0
  })

  useEffect(() => {
    setCounter({
      letter: text ? text.length : 0,
      word: text ? text?.split(' ').length : 0,
      line: text ? text?.split(/\n/).filter(word => word !== '').length : 0
    })
  }, [text])

  const getSpeed = useCallback(() => {
    const slowReadingSpeed = 100; // words per minute
    const averageReadingSpeed = 183; // words per minute
    const fastReadingSpeed = 260; // words per minute

    function calculateReadingTime(words, readingSpeed) {
      const seconds = (words / readingSpeed) * 60;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.round(seconds % 60);
      return `${minutes}M ${remainingSeconds}S`;
    }
    const fastReader = calculateReadingTime(counter.word, fastReadingSpeed);
    const averageReader = calculateReadingTime(counter.word, averageReadingSpeed);
    const slowReader = calculateReadingTime(counter.word, slowReadingSpeed)
    return { fastReader, averageReader, slowReader }
  }, [counter, text])
  const { fastReader, averageReader, slowReader } = getSpeed()

  const upperCase = useCallback(() => {
    const txt = text;
    setText(txt.toUpperCase())
  }, [text])

  const lowerCase = useCallback(() => {
    const txt = text;
    setText(txt.toLowerCase())
  }, [text])

  const capitalizeCase = useCallback(() => {
    const capitalizedTxt = text
      .toLowerCase()
      .split(' ')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    setText(capitalizedTxt)
  }, [text])

  const alternateCase = useCallback(() => {
    const alternateCase =
      text.toLowerCase().split(' ')
        .map(text => {
          let newText = '';
          for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
              newText += text[i].toUpperCase()
            } else {
              newText += text[i].toLowerCase()
            }
          }
          return newText;
        }).join(' ');
    setText(alternateCase)
  }, [text])

  const reversedCase = useCallback(() => {
    const reversedText = text.toLowerCase().split(' ').reverse()
      .map(text => {
        const newText = text.split('').reverse().join('')
        return newText;
      }).join(' ')
    setText(reversedText)
  }, [text])


  const trimWhiteSpace = useCallback(() => {
    const newText = text.trim().split(' ').filter((str) => {
      if (str === '') return;
      return str
    }).join(' ')
    setText(newText)
  }, [text])
  const encodeBase64 = useCallback(() => {
    const newText = btoa(text)
    setText(newText)
  }, [text])

  const decodeBase64 = useCallback(() => {
    const newText = atob(text)
    setText(newText)
  }, [text])

  const encodeToBinary = useCallback(() => {
    const newText = text.split('').map(char => {
      const modifiedChar = char.charCodeAt(0).toString(2);
      return modifiedChar;
    }).join(' ')
    setText(newText)
  }, [text])

  const decodeFromBinary = useCallback(() => {
    const newText = text.split(' ').map((subStr) => {
      const numToText = String.fromCharCode(parseInt(subStr, 2))
      return numToText
    }).join('')
    setText(newText)
  }, [text])

  const copyText = useCallback(() => {
    const txt = text;
    navigator.clipboard.writeText(txt)
  }, [text])

  const clearText = useCallback(() => {
    setText('')
  }, [text])



  return (
    <main className="pb-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sm:text-xl md:text-3xl font-bold c">Manipulate text:
        </h1>

        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
            <section >
              <div className="overflow-hidden rounded-lg bg-white shadow h-full">
                <div className="p-6">
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="input"
                      id="input"
                      className="block w-full h-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6  resize-none scroll-smooth"
                      placeholder='Your text goes here...'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Right column */}
          <div className="grid grid-cols-1 gap-4">
            <section>
              <div className="overflow-hidden rounded-lg bg-white shadow font-[Urbanist] p-2 ">
                <p className='text-lg font-semibold'>Simple Manipulation:</p>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={upperCase}
                  >
                    Uppercase
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={lowerCase}
                  >
                    Lowercase
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={capitalizeCase}
                  >
                    Capitalize
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={alternateCase}
                  >
                    AlTeRnAtIoN
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={reversedCase}
                  >
                    Reverse Text
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={trimWhiteSpace}
                  >
                    Trim Space
                  </button>
                </div>
                <p className='text-lg font-semibold'>Cryptic Manipulation:</p>
                base64:
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={encodeBase64}
                  >
                    Encode Text
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={decodeBase64}
                  >
                    Decode Text
                  </button>

                </div>
                binary (0 and 1):
                <div className="grid grid-cols-2 gap-1">

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={encodeToBinary}
                  >
                    Encode Text
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={decodeFromBinary}
                  >
                    Decode Text
                  </button>
                </div>
                <p className='text-lg font-semibold'>Copy and Reset</p>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={copyText}
                  >
                    Copy Text
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={clearText}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4">
          <p className='text-lg font-semibold'>Text Summary:</p>
          <p className='text-gray-700 flex items-center font-[400]'>
            <span className='px-2 '>
              <span className='font-bold'>{counter?.letter}</span> Character
            </span>
            <span className=' px-2 border-x-4 border-primary '>
              <span className='font-bold'>{counter?.word}</span> Words
            </span>
            <span className='px-2'>
              <span className='font-bold'>{counter?.line}</span> Line
            </span>
          </p>
        </div>
        <div className="mt-2 w-full">
          <p className='text-lg font-semibold'>Estimated Reading Time:</p>
          <table className="table-auto border-collapse border w-full border-primary/80">
            <thead>
              <tr className='flex items-center justify-around border-b-4'>
                <th>Fast Reader</th>
                <th>Average Reader</th>
                <th>Slow Reader</th>
              </tr>
              <tr className='flex items-center justify-around'>
                <td>{text ? fastReader : '0M 0S'}</td>
                <td>{text ? averageReader : '0M 0S'}</td>
                <td>{text ? slowReader : '0M 0S'}</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mt-2">
          <p className='text-lg font-semibold'>Preview:</p>

          <textarea
            rows={4}
            name="Preview"
            id="Preview"
            readOnly
            className="block w-full h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:bg-secondary/10 focus:ring-orange-400 focus:ring-inset text-lg font-medium sm:leading-6  resize-none scroll-smooth"
            placeholder='Your text preview will be here...'
            value={text}
          />
        </div>
      </div>
    </main>
  )
}

export default Home