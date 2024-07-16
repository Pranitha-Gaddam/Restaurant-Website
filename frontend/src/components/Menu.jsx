import React from "react";
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


    return (
        <div className="w-screen min-h-min justify-center -mt-3.5" id="menu">
        <h1 className={`animitem ${titleInView ? 'animate-slidein200' : ''} cinzel-decorative-regular text-amber-200 text-center pb-10 mt-3 text-3xl big-heading big-shadow-letters text-[5vw] lg:text-[3vw]`} ref={titleRef} id="menu">Menu</h1>
        <div className="sm:mx-[2vw] md:mx-[5vw] lg:mx-[7vw] xl:mx-[10vw] 2xl:mx-[15vw] mb-10 mt-10 ">
            <h3 className={`animitem ${appeTitleInView ? 'animate-slidein200' : ''} cinzel-decorative-regular text-xl md:text-3xl text-amber-200 text-center`} ref={appeTitleRef}>Appetizers</h3>
            <div className={`animitem ${appeContentInView ? 'animate-slidein400' : ''} flex flex-wrap  text-amber-200`} ref={appeContentRef} >
                <MenuItem
                    name="Samosa"
                    desc="Crisp pastry filled with spiced potatoes and peas, served with tamarind chutney."
                />
                
                <MenuItem
                    name="Paneer Tikka"
                    desc="Marinated paneer cubes grilled to perfection, served with mint chutney."
                />
                <MenuItem
                    name="Gobi Manchurian"
                    desc="Sweet and spicy mixed vegetables marinated in a garam masala, served with a side of chickpea flour batter."
                />
                <MenuItem
                    name="Chicken Tikka"
                    desc="Boneless chicken marinated in yogurt and spices, grilled and served with a side of mint chutney."
                />
                <MenuItem
                    name="Vegetable Pakora"
                    desc="Mixed vegetables dipped in chickpea flour batter and deep-fried, served with tamarind chutney."
                />
                <MenuItem
                    name="Aloo Chaat"
                    desc="Spiced potato cubes mixed with tangy tamarind sauce, yogurt, and chaat masala."
                />
            </div>
        </div>
        <div className="sm:mx-[2vw] md:mx-[5vw] lg:mx-[7vw] xl:mx-[10vw] 2xl:mx-[15vw] mb-10 mt-20">
            <h3 className={`animitem ${mainTitleInView ? 'animate-slidein200' : ''} cinzel-decorative-regular text-xl md:text-3xl text-amber-200 text-center`} ref={mainTitleRef}>Main Courses</h3>
            <div className={`animitem ${mainContentInView? 'animate-slidein400' : ''} flex flex-wrap  text-amber-200`} ref={mainContentRef} >
                <MenuItem
                    name="Butter Chicken"
                    desc="Chicken cooked in a creamy tomato sauce with butter and a blend of spices."
                />
                <MenuItem
                    name="Chicken Tikka Masala"
                    desc="Boneless chicken marinated in yogurt and spices, grilled and served with a side of mixed vegetables."
                />
                <MenuItem
                    name="Chicken Biryani"
                    desc="Fragrant basmati rice cooked with chicken, spices, and saffron, served with raita."
                />
                <MenuItem
                    name="Mushroom Paneer Tikka"
                    desc="Marinated paneer cubes grilled to perfection, served with mushroom sauce."
                />
                <MenuItem
                    name="Palak Paneer"
                    desc="Spinach and cottage cheese cooked in a creamy, spiced sauce."
                />
                <MenuItem
                    name="Dal Makhani"
                    desc="Black lentils and kidney beans simmered in a rich, creamy tomato sauce."
                />
            </div>
        </div>
        <div className="sm:mx-[2vw] md:mx-[5vw] lg:mx-[7vw] xl:mx-[10vw] 2xl:mx-[15vw] mb-10 mt-20">
            <h3 className={`animitem ${dessertTitleInView ? 'animate-slidein200' : ''} cinzel-decorative-regular text-xl md:text-3xl text-amber-200 text-center`} ref={dessertTitleRef}>Desserts</h3>
            <div className={`animitem ${dessertContentInView? 'animate-slidein400' : ''} flex flex-wrap  text-amber-200`} ref={dessertContentRef} >
                <MenuItem
                    name="Gulab Jamun"
                    desc="Soft milk-based dumplings soaked in rose-flavored sugar syrup."
                />
                <MenuItem
                    name="Gajar Halwa"
                    desc="Carrot pudding made with grated carrots, milk, sugar, and ghee, garnished with nuts."
                />
                <MenuItem
                    name="Rasmalai"
                    desc="Soft paneer patties soaked in sweetened, saffron-flavored milk."
                />
                <MenuItem
                    name="Kheer"
                    desc="Rice pudding made with milk, sugar, and flavored with cardamom and nuts."
                />
                <MenuItem
                    name="Jalebi"
                    desc="Deep-fried spirals of batter soaked in sugar syrup, crispy and sweet."
                />
                <MenuItem
                    name="Mango Kulfi"
                    desc="Traditional Indian ice cream made with mangoes, milk, and nuts."
                />
            </div>
        </div>
        </div>
    )
}


export default Menu;