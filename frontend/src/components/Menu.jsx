import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./Menuitem";
import { useInView } from "react-intersection-observer";

function Menu() {
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
    const { ref: appeTitleRef, inView: appeTitleInView } = useInView({ triggerOnce: true });
    const { ref: appeContentRef, inView: appeContentInView } = useInView({ triggerOnce: true });
    const { ref: mainTitleRef, inView: mainTitleInView } = useInView({ triggerOnce: true });
    const { ref: mainContentRef, inView: mainContentInView } = useInView({ triggerOnce: true });
    const { ref: dessertTitleRef, inView: dessertTitleInView } = useInView({ triggerOnce: true });
    const { ref: dessertContentRef, inView: dessertContentInView } = useInView({ triggerOnce: true });

    const menuData = {
        appetizers: [
            {
                name: "Samosa",
                desc: "Crisp pastry filled with spiced potatoes and peas, served with tamarind chutney.",
                price: "$8.99"
            },
            {
                name: "Paneer Tikka",
                desc: "Marinated paneer cubes grilled to perfection, served with mint chutney.",
                price: "$12.99"
            },
            {
                name: "Gobi Manchurian",
                desc: "Sweet and spicy mixed vegetables marinated in a garam masala, served with a side of chickpea flour batter.",
                price: "$10.99"
            },
            {
                name: "Chicken Tikka",
                desc: "Boneless chicken marinated in yogurt and spices, grilled and served with a side of mint chutney.",
                price: "$14.99"
            },
            {
                name: "Vegetable Pakora",
                desc: "Mixed vegetables dipped in chickpea flour batter and deep-fried, served with tamarind chutney.",
                price: "$7.99"
            },
            {
                name: "Aloo Chaat",
                desc: "Spiced potato cubes mixed with tangy tamarind sauce, yogurt, and chaat masala.",
                price: "$9.99"
            }
        ],
        mains: [
            {
                name: "Butter Chicken",
                desc: "Chicken cooked in a creamy tomato sauce with butter and a blend of spices.",
                price: "$18.99"
            },
            {
                name: "Chicken Tikka Masala",
                desc: "Boneless chicken marinated in yogurt and spices, grilled and served with a side of mixed vegetables.",
                price: "$19.99"
            },
            {
                name: "Chicken Biryani",
                desc: "Fragrant basmati rice cooked with chicken, spices, and saffron, served with raita.",
                price: "$21.99"
            },
            {
                name: "Mushroom Paneer Tikka",
                desc: "Marinated paneer cubes grilled to perfection, served with mushroom sauce.",
                price: "$16.99"
            },
            {
                name: "Palak Paneer",
                desc: "Spinach and cottage cheese cooked in a creamy, spiced sauce.",
                price: "$15.99"
            },
            {
                name: "Dal Makhani",
                desc: "Black lentils and kidney beans simmered in a rich, creamy tomato sauce.",
                price: "$14.99"
            }
        ],
        desserts: [
            {
                name: "Gulab Jamun",
                desc: "Soft milk-based dumplings soaked in rose-flavored sugar syrup.",
                price: "$6.99"
            },
            {
                name: "Gajar Halwa",
                desc: "Carrot pudding made with grated carrots, milk, sugar, and ghee, garnished with nuts.",
                price: "$7.99"
            },
            {
                name: "Rasmalai",
                desc: "Soft paneer patties soaked in sweetened, saffron-flavored milk.",
                price: "$8.99"
            },
            {
                name: "Kheer",
                desc: "Rice pudding made with milk, sugar, and flavored with cardamom and nuts.",
                price: "$6.99"
            },
            {
                name: "Jalebi",
                desc: "Deep-fried spirals of batter soaked in sugar syrup, crispy and sweet.",
                price: "$5.99"
            },
            {
                name: "Mango Kulfi",
                desc: "Traditional Indian ice cream made with mangoes, milk, and nuts.",
                price: "$7.99"
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="w-screen min-h-min justify-center py-20" id="menu" aria-labelledby="menu-heading">
            <motion.h1 
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="cinzel-decorative-regular text-amber-200 text-center pb-10 mt-3 text-3xl big-heading big-shadow-letters text-[5vw] lg:text-[3vw]"
                id="menu-heading"
            >
                Our Menu
            </motion.h1>
            
            {/* Appetizers */}
            <div className="sm:mx-[2vw] md:mx-[5vw] lg:mx-[7vw] xl:mx-[10vw] 2xl:mx-[15vw] mb-10 mt-10">
                <motion.h3 
                    ref={appeTitleRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={appeTitleInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="cinzel-decorative-regular text-xl md:text-3xl text-amber-200 text-center mb-8"
                >
                    Appetizers
                </motion.h3>
                <motion.div 
                    ref={appeContentRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={appeContentInView ? "visible" : "hidden"}
                    className="flex flex-wrap text-amber-200"
                >
                    {menuData.appetizers.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
            
            {/* Main Courses */}
            <div className="sm:mx-[2vw] md:mx-[5vw] lg:mx-[7vw] xl:mx-[10vw] 2xl:mx-[15vw] mb-10 mt-20">
                <motion.h3 
                    ref={mainTitleRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={mainTitleInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="cinzel-decorative-regular text-xl md:text-3xl text-amber-200 text-center mb-8"
                >
                    Main Courses
                </motion.h3>
                <motion.div 
                    ref={mainContentRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={mainContentInView ? "visible" : "hidden"}
                    className="flex flex-wrap text-amber-200"
                >
                    {menuData.mains.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
            
            {/* Desserts */}
            <div className="sm:mx-[2vw] md:mx-[5vw] lg:mx-[7vw] xl:mx-[10vw] 2xl:mx-[15vw] mb-10 mt-20">
                <motion.h3 
                    ref={dessertTitleRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={dessertTitleInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="cinzel-decorative-regular text-xl md:text-3xl text-amber-200 text-center mb-8"
                >
                    Desserts
                </motion.h3>
                <motion.div 
                    ref={dessertContentRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={dessertContentInView ? "visible" : "hidden"}
                    className="flex flex-wrap text-amber-200"
                >
                    {menuData.desserts.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}


export default Menu;