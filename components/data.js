import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  MicrophoneIcon,
  UserGroupIcon,
  UserPlusIcon,
  BeakerIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits of Sushumna Kriya Yoga",
  desc: "Provide numerous potential advantages, encompassing both physical and mental aspects. It's crucial to emphasize that individual experiences can differ significantly.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Destress, Rejuvenate, and Rejoice ",
      desc: "Find relaxation and ease, Recharge and renew your energy, Celebrate and find joy",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Enhanced Physical Health",
      desc: "Improved physical health, including better digestion, increased flexibility, and reduced muscle tension",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve Self-awareness and attain Emotional balance ",
      desc: "Enhance self-awareness while achieving emotional equilibrium, Cultivate self-awareness and find emotional harmony",
      icon: <BeakerIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offered Programs",
  desc: "The foundation offers a diverse array of programs, each with its unique set of details. These programs span various domains, catering to a wide range of needs and interests. ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Sushumna Sikshana",
      desc: "Designed for children aged between 8 to 15 years targeting holistic learning & growth.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Sushumna Vani",
      desc: "A podcast series to spread the knowledge of Sushumna Kriya Meditation.",
      icon: <MicrophoneIcon />,
    },
    {
      title: "Sushumna GarbhSanskar",
      desc: "‘Vedic Genetic Engineering‘ to redirect the lifestyle of expecting mothers.",
      icon: <UserPlusIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
