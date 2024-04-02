import { ReactElement, useRef } from "react";
import InfoCard from "../components/InfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box } from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { DocumentData } from "firebase/firestore";

const cardDimnetions: {
    width: number;
    heigth: number;
} = {
    width: 280,
    heigth: 200,
};

export default function CustomSwipper(): ReactElement {
    // const [isLargerThan448]: boolean[] = useMediaQuery("(min-width: 448px)");
    const posts: DocumentData = useSelector(
        (state: RootState) => state.data.posts
    );
    const sortedPosts: DocumentData[] = [];
    posts.map((it: DocumentData) => sortedPosts.push(it));
    sortedPosts.sort((a: DocumentData, b: DocumentData) => {
        return a.index - b.index;
    });

    const elementRef = useRef<HTMLDivElement>(null);
    const dimensions = useSize(elementRef);

    function calculateSwiper(): number | undefined {
        const space: number = 40;
        const totalCardArea: number = cardDimnetions.width + space;
        const divArea: number =
            typeof dimensions?.width === "number" ? dimensions?.width : 0;
        const numberOfSlides: number = divArea / totalCardArea;
        return numberOfSlides;
    }
    return (
        <Box pl={6} mb={1} ref={elementRef} overflow="visible">
            <Swiper
                // spaceBetween="-10px"
                slidesPerView={calculateSwiper() != 0 ? calculateSwiper() : 1}
                scrollbar={{ draggable: true }}
                // centeredSlides={!isLargerThan448}
            >
                {sortedPosts.map((it: DocumentData, index: number) => (
                    <SwiperSlide>
                        <InfoCard
                            key={index}
                            width={cardDimnetions.width}
                            data={it}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
