import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-red-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-red-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How to differentiate between sleeping and meditation?",
    answer: "You can find it through your body /sitting position. If you are still sitting straight means you're meditating, if your body is slouched it means you are sleeping.There is no harm if you are sleeping for a while.(usually happens when one is tired, eaten a heavy meal or not slept properly for few days)..",
  },
  {
    question: "Why should I sit straight or erect?",
    answer: "The human body consists of 72000 NADIS. Nadi’s are astral tubules. Out of these 72000 Nadi’s there are 3 very important Nadi’s known as IDA, PINGALA and SUSHUMNA. These 3 Nadi’s originates from ROOT CHAKRA ( Mooladhara) and the IDA & PINGALA end at third eye chakra (AJANA) , the SUSHUMNA connects to Crown chakra (SAHASRARA).",
  },
  {
    question: "Why 49 minutes?",
    answer:
      "Human body consists of 7 chakras, for each chakra 7 minutes of meditation for cleansing and energizing.One need not to be mentally focusing on any chakra. The yoga mudra automatically takes care of it.",
  },
  {
    question: "I am unable to concentrate and get disturbed during meditation.",
    answer:
      "Repeat the chanting of AUM for 7 or 14 times and deep breathing for 7 times (without opening eyes or mudra).",
  },
];

export default Faq;