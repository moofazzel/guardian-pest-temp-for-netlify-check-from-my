"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
  children,
  isOpen,
  setIsOpen,
  handleCloseModal,
}) {
  function closeModal() {
    setIsOpen(false);
    if (handleCloseModal) handleCloseModal();
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/45" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-dark2 rounded-xl">
                  <button
                    onClick={closeModal}
                    className="absolute w-8 h-8 text-white transition-all border border-white rounded-full btn btn-sm btn-circle right-5 top-5 hover:bg-red-500 hover:border-red-500"
                  >
                    ✕
                  </button>

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
