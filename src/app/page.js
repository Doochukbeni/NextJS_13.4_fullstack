import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Background from "./components/Background";
import TestimonialsBackground from "./components/(testimonials)/TestimonialsBackground";
import Testimonials from "./components/(testimonials)/Testimonials";

export default function Home() {
  return (
    <div className="relative overflow-hidden my-5 mx-auto isolate  bg-white px-12 py-10 sm:py-10 lg:px-5">
      <Background />
      <Hero />

      <hr className="w-1/2 mx-auto shadow-md my-5 bg-black dark:bg-white" />

      <section className="max-w-5xl my-5 mx-auto ">
        <Carousel />
        {/* <Carousel autoSlide={true}>
          {slides.map((slide) => (
            <Image
              key={slide.id}
              src={slide.url}
              alt=""
              height={100}
              width={2000}
              className="object-cover h-96"
            />
          ))}
        </Carousel> */}
      </section>
      <hr className="w-1/2 mx-auto shadow-md my-5 bg-black dark:bg-white" />

      <section className="relative w-full bg-zinc-200  my-0 mx-auto isolate overflow-hidden">
        <TestimonialsBackground />
        <Testimonials />
      </section>
    </div>
  );
}
