import { useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { availableCasesCards } from "../../utils/constants";
import { rightArrow } from "../../assets";
import { Navigation } from "swiper/modules";

const AvailableCases = () => {
    const [isPrevHidden, setIsPrevHidden] = useState(true); // Initially hide the prev button
    const [isNextHidden, setIsNextHidden] = useState(false); // Initially show the next button

    const handleSlideChange = (swiper: any) => {
        // Hide or show the prev button based on the current slide
        if (swiper.isBeginning) {
            setIsPrevHidden(true);
        } else {
            setIsPrevHidden(false);
        }

        // Hide or show the next button based on the current slide
        if (swiper.isEnd) {
            setIsNextHidden(true);
        } else {
            setIsNextHidden(false);
        }
    };

    const handleSwiperInit = (swiper: any) => {
        // Set the initial state based on whether the swiper is at the start or end
        if (swiper.isBeginning) {
            setIsPrevHidden(true);
        } else {
            setIsPrevHidden(false);
        }

        if (swiper.isEnd) {
            setIsNextHidden(true);
        } else {
            setIsNextHidden(false);
        }
    };

    return (
        <div className="flex flex-col gap-[24px]">
            <h1 className="text-h2-24-m text-blue-500">Available Cases</h1>
            <div className="flex items-center justify-center relative">
                <button
                    aria-label="Next slide"
                    className={`swiper-button-next-me z-50 absolute -right-8 top-1/2 -translate-y-1/2 bg-white shadow-custom w-[55px] h-[55px] rounded-full flex justify-center items-center transition-all duration-300 ${
                        isNextHidden ? "opacity-0" : ""
                    }`}
                >
                    <img width={13} src={rightArrow} alt="right-arrow" />
                </button>

                <button
                    aria-label="Previous slide"
                    className={`swiper-button-prev-me z-50 absolute -left-8 top-1/2 -translate-y-1/2 bg-white shadow-custom w-[55px] h-[55px] rounded-full flex justify-center items-center transition-all duration-300 ${
                        isPrevHidden ? "opacity-0" : ""
                    }`}
                >
                    <img
                        className="rotate-180"
                        width={13}
                        src={rightArrow}
                        alt="right-arrow"
                    />
                </button>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next-me",
                        prevEl: ".swiper-button-prev-me",
                    }}
                    spaceBetween={100}
                    slidesPerView={3}
                    onSlideChange={handleSlideChange} // Track slide change
                    onInit={handleSwiperInit} // Handle initial state based on Swiper's initial position
                >
                    {availableCasesCards.map(
                        ({ author, level, progress, title, id }) => (
                            <SwiperSlide className="pb-[16px]" key={id}>
                                <Card
                                    author={author}
                                    level={level}
                                    progress={progress}
                                    title={title}
                                    id={id}
                                />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default AvailableCases;
