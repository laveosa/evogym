import { IGymClass, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import GymClass from "@/components/GymClass";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

const gymClasses: IGymClass[] = [
  {
    image: image1,
    title: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis odit aperiam ut repellendus aspernatur soluta veniam placeat consectetur laboriosam voluptatum nostrum quisquam quas, iste voluptatibus culpa aut incidunt itaque?",
  },
  {
    image: image2,
    title: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis odit aperiam ut repellendus aspernatur soluta veniam placeat consectetur laboriosam voluptatum nostrum quisquam quas, iste voluptatibus culpa aut incidunt itaque?",
  },
  {
    image: image3,
    title: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis odit aperiam ut repellendus aspernatur soluta veniam placeat consectetur laboriosam voluptatum nostrum quisquam quas, iste voluptatibus culpa aut incidunt itaque?",
  },
  {
    image: image4,
    title: "Massage Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis odit aperiam ut repellendus aspernatur soluta veniam placeat consectetur laboriosam voluptatum nostrum quisquam quas, iste voluptatibus culpa aut incidunt itaque?",
  },
  {
    image: image5,
    title: "Fitnes Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis odit aperiam ut repellendus aspernatur soluta veniam placeat consectetur laboriosam voluptatum nostrum quisquam quas, iste voluptatibus culpa aut incidunt itaque?",
  },
  {
    image: image6,
    title: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis odit aperiam ut repellendus aspernatur soluta veniam placeat consectetur laboriosam voluptatum nostrum quisquam quas, iste voluptatibus culpa aut incidunt itaque?",
  },
];

interface IOurClasses {
  setSelectedPage: (value: SelectedPage) => void;
}

export default function OurClasses({ setSelectedPage }: IOurClasses) {
  const scrollRef = useHorizontalScroll();

  return (
    <section
      id={`#${SelectedPage.OurClasses}`}
      className="w-full bg-primary-100 py-20 mt-40 md:mt-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              odit consequatur blanditiis enim placeat rem culpa, minus maxime
              quas ab alias veniam eius architecto nostrum aperiam ullam,
              excepturi quidem odio!
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={scrollRef}
          className="mx-auto w-5/6 mt-10 h-[353px] overflow-x-auto overflow-y-hidden rotate-[-90]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul
            className="w-[2800px] whitespace-nowrap flex gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {gymClasses.map((item: IGymClass) => (
              <GymClass key={item.title} {...item} />
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
