import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { SelectedPage } from "@/shared/types";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/components/HText";

type IContactUs = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ContactUs({ setSelectedPage }: IContactUs) {
  const inputStyles =
    "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const inputConfig = {
    required: true,
    min: 3,
    max: 100,
  };

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  function getInputErrorMsg(identifier) {
    return (
      <p className="absolute -bottom-6 text-primary-500">
        {errors[identifier]?.type === "required" && "This input is requierd"}
        {errors[identifier]?.type === "minLength" &&
          "Min length need to be not less then 3 symbols"}
        {errors[identifier]?.type === "maxLength" &&
          "Max length need to be not more then 100 symbols"}
      </p>
    );
  }

  async function onSubmit(e: any) {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500 basis-3/5 font-montserrat text-3xl font-bold uppercase">
              Join now{" "}
            </span>
            to get in shape
          </HText>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="my-5">
              Temporibus aliquid earum molestias odit inventore impedit sint,
              perspiciatis eaque nulla quod ipsa, eveniet, reprehenderit
              veritatis saepe accusantium veniam quaerat quos et?
            </p>
          </motion.div>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="flex flex-col gap-6"
              method="POST"
              action="https://formsubmit.co/840dc7a6339a3a34bedae74af85272dc"
              target="_blank"
              onSubmit={onSubmit}
            >
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="NAME..."
                  className={inputStyles}
                  {...register("name", inputConfig)}
                />
                {errors.name && getInputErrorMsg("name")}
              </div>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="EMAIL..."
                  className={inputStyles}
                  {...register("email", {
                    ...inputConfig,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && getInputErrorMsg("email")}
              </div>
              <div className="relative flex">
                <textarea
                  placeholder="MESSAGE..."
                  rows={6}
                  className={`${inputStyles} resize-none`}
                  {...register("message", inputConfig)}
                />
                {errors.message && getInputErrorMsg("message")}
              </div>
              <button
                type="submit"
                className="cursor-pointer font-bold w-[200px] text-primary-transition duration-300 rounded-md bg-secondary-500 mt-4 px-6 py-2 hover:bg-primary-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 z-[-1]">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-ua-image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
