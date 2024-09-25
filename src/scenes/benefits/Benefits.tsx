import { motion } from "framer-motion";

import Benefit from "@/components/Benefit";
import HText from "@/components/HText";
import { IBenefit, SelectedPage } from "@/shared/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const benefits: IBenefit[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto quibusdam architecto quidem mollitia quaerat vel, porro ducimus quas corrupti! Quibusdam ipsum tempora asperiores harum cum eum magnam! Obcaecati, ea?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100`s of Diverse Classes",
    description:
      "Fugit iusto quibusdam architecto quidem mollitia quaerat vel, porro ducimus quas corrupti! Quibusdam ipsum tempora asperiores harum cum eum magnam! Obcaecati, ea?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fugit iusto quibusdam architecto quidem mollitia quaerat vel, porro ducimus quas corrupti! Quibusdam ipsum tempora asperiores harum cum eum magnam! Obcaecati, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

interface IBenefits {
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Benefits({ setSelectedPage }: IBenefits) {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <HText>More then just a gym.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-start justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {benefits.map((benefit: IBenefit) => (
            <Benefit
              key={benefit.title}
              {...benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
