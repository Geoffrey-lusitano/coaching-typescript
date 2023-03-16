import ActionButton from "@/share/ActionButton";
import HText from "@/share/HText";
import { BenefitType, SelectedPage } from "@/share/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Home Modern",
        description: "Home Modern bllllllllllllllllllaaaaaaaaaaa",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Home Modern",
        description: "Home Modern bllllllllllllllllllaaaaaaaaaaa",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Home Modern",
        description: "Home Modern bllllllllllllllllllaaaaaaaaaaa",
    },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="bénéfices"
    className="mx-auto min-h-full w-5/6 py-10"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <HText>UN PLUS DANS VOTRE VIE</HText>
                <p className="my-5 text-sm ">
                Depuis 2013 nous accompagnons des milliers de clients à domicile, en plein air ou encore en entreprise dans le but de réaliser leurs nombreux objectifs. Notre force ? Une entreprise à taille humaine et des coachs sportifs recrutés avec une grande rigueur qui proposent un suivi client très personnalisé.
                </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial ="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHICS */}
                <img
                className="mx-auto"
                src={BenefitsPageGraphic} alt="" />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                  hidden: { opacity: 0, x: 50 },
                                  visible: { opacity: 1, x: 0 },
                                }}
                    className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    TOUS LE MONDE PEUX DEVENIR{" "}
                                    <span className="text-primary-500 ">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </motion.div>
                    {/* DESCRIPTION */}
                    <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                  hidden: { opacity: 0, x: 50 },
                                  visible: { opacity: 1, x: 0 },
                                }}
                    >
                        <p className="my-5">
                            En 5 ans le nombre de coachs sportifs à pratiquement été multiplié par 10 ! C'est vrai qu'il n'est pas toujours facile de bien choisir son coach ! Entre les coachs qui ne sont pas diplômés, ceux qui ne sont pas du tout sérieux, ceux qui ne tiennent pas à jour leur comptabilité, ceux qui ne comprennent pas vos objectifs et ceux qui sont mal formés... vous pouvez avoir quelques surprises désagréables ! C'est pourquoi nous avons décidés de les recruter et de les choisir pour vous afin de vous proposer les meilleurs coachs de votre ville !
                        </p>
                        <p className="mb-5">
                            Depuis plusieurs années nous encadrons nos clients jusqu'à la réalisation de leurs objectifs. Nous adaptons nos séances en fonction de ceux-ci mais également en fonction de leurs niveau de forme, leurs différents problèmes de santé, leurs âges, leurs complexes, leurs planning... Tout est pris en compte pour un résultat rapide et durable.
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Rejoins nous
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
};

export default Benefits;
