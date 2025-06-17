import useEmblaCarousel from "embla-carousel-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Acceptor {
  id: number;
  name: string;
  image: string;
}

const fakeAcceptors: Acceptor[] = [
  {
    id: 1,
    name: "فروشگاه الکترونیک",
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    name: "فروشگاه پوشاک",
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    name: "فروشگاه لوازم خانگی",
    image: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 4,
    name: "فروشگاه مواد غذایی",
    image: "https://picsum.photos/200/200?random=4",
  },
  {
    id: 5,
    name: "فروشگاه کتاب",
    image: "https://picsum.photos/200/200?random=5",
  },
];

const Acceptors = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <section className="relative px-4 py-8">
      <div className="flex items-center mb-5 justify-between ">
        <div>
          <h1 className=" text-lg font-bold">فروشگاه ها</h1>
        </div>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {fakeAcceptors.map((acceptor) => (
              <div
                className="embla__slide  !flex-none basis-[20%] justify-center"
                key={acceptor.id}
              >
                <div className="flex flex-col items-center p-0">
                  <Avatar className="h-14 w-14 rounded-full mb-2">
                    <AvatarImage src={acceptor.image} alt={acceptor.name} />
                    <AvatarFallback>{acceptor.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium text-gray-700 text-center line-clamp-1">
                    {acceptor.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acceptors;
