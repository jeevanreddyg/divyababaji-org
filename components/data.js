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
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui lacus, eget fermentum tellus placerat non. Pellentesque blandit sed mauris ut facilisis",
  image: benefitOneImg,
  bullets: [
    {
      title: "Destress, rejuvenate, and rejoice ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Decrease chronic pain",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve self-awareness and attain emotional balance ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <BeakerIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offered Programs",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui lacus, eget fermentum tellus placerat non. Pellentesque blandit sed mauris ut facilisis",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Sushumna Sikshana",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <UserGroupIcon />,
    },
    {
      title: "Sushumna Vani",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <MicrophoneIcon />,
    },
    {
      title: "Sushumna GarbhSanskar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <UserPlusIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
