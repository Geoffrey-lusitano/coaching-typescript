import { SelectedPage, ClassType } from '@/share/types';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import HText from '@/share/HText';
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Big Blabla",
        description: "petit blabla",
        image: image1,
    },
    {
        name: "Big Blabla",
        image: image2,
    },
    {
        name: "Big Blabla",
        description: "",
        image: image3,
    },
    {
        name: "Big Blabla",
        description: "",
        image: image4,
    },
    {
        name: "Big Blabla",
        image: image5,
    },
    {
        name: "Big Blabla",
        description: "",
        image: image6,
    },
    
]

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
    id='noscours'
    className='w-full bg-primary-100 py-40'
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{  duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
            >
                <div className='md:w-3/5'>
                    <HText>
                        NOS COURS
                    </HText>
                    <p className='py-5'>
                    Fini les désillusions, nos coachs sportifs vous prennent en main, vous conseillent pour que vos séances soient les plus efficaces possible. Rien n’est laissé au hasard et les résultats sont au RDV !
                    </p>
                </div>

            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-auto'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses 