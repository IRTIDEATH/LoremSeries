import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/ui/Carousel-item";

const CarouselContainer = () => {
  return (
    <Carousel className="max-w-3xl">
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative">
        <CarouselMainContainer className="h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-black">
                Slide {index + 1}
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;