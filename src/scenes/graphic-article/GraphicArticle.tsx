import ActionButton from "@/components/ActionButton";
import HText from "@/components/HText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";

interface IGraphicArticle {
  setSelectedPage: (SelectedPage) => void;
}

export default function GraphicArticle({ setSelectedPage }: IGraphicArticle) {
  return (
    <div className="mx-auto min-h-[700px] w-5/6 items-center justify-between gap-20 md:flex">
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        className="mx-auto"
        src={BenefitsPageGraphic}
        alt="article-image"
      />
      <div>
        {/* TITLE */}
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <HText>
                Millions of happy members getting{" "}
                <span className="text-primary-500 basis-3/5 font-montserrat text-3xl font-bold uppercase">
                  FIT
                </span>
              </HText>
            </motion.div>
          </div>
        </div>
        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aliquid earum molestias odit inventore impedit sint, perspiciatis
            eaque nulla quod ipsa, eveniet, reprehenderit veritatis saepe
            accusantium veniam quaerat quos et? Temporibus aliquid earum
            molestias odit inventore impedit sint, perspiciatis eaque nulla quod
            ipsa, eveniet, reprehenderit veritatis saepe accusantium veniam
            quaerat quos et?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aliquid earum molestias odit inventore impedit sint, perspiciatis
            eaque nulla quod ipsa, eveniet, reprehenderit veritatis saepe
            accusantium veniam quaerat quos et?
          </p>
        </motion.div>
        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mt-16"
        >
          <div className="before:absolute before:-bottom-10 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton
              setSelectedPage={() => setSelectedPage(SelectedPage.OurClasses)}
            >
              Join Now
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
