import { IGymClass } from "@/shared/types";
import { motion } from "framer-motion";

export default function GymClass(props: IGymClass) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      }}
      className="relative inline-block w-[450px] rounded-md overflow-hidden"
    >
      <div className="p-5 absolute z-30 h-full flex flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-80">
        <p className="text-2xl">{props.title}</p>
        <p className="mt-5">{props.description}</p>
      </div>
      <img className="w-full" src={props.image} alt={props.image} />
    </motion.li>
  );
}
