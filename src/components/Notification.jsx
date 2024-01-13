import { Fragment, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';
const Notification = ({ show, setShow, information: { type, title, body } }) => {
  const NOTIFICATION_ICON = type === 'success' ? (
    <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
  ) : (
    <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
  );

  useEffect(() => {
    const portalRoot = document.getElementById('notification');
    const notificationContainer = document.createElement('div');
    portalRoot.appendChild(notificationContainer);

    return () => {
      portalRoot.removeChild(notificationContainer);
    };
  }, []);

  return (
    createPortal(
      show && (
        <>
          <div
            aria-live="assertive"
            className="pointer-events-none z-[100] inset-0 fixed flex items-start px-4 py-6  sm:p-6"
          >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
              <Transition
                show={show}
                as={Fragment}
                enter="transform ease-out duration-300 transition"
                enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">{NOTIFICATION_ICON}</div>
                      <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-base font-medium text-gray-900">{title}</p>
                        <p className="mt-1 text-[14px] text-gray-500">{body}</p>
                      </div>
                      <div className="ml-4 flex flex-shrink-0">
                        <button
                          type="button"
                          className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </>
      ),
      document.querySelector('#notification')
    )
  );
}
export default Notification;