import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Section() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-4 sm:mb-0">
          Discover Something New
        </h2>
        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="gap-2 sm:gap-4">
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 1"
                src="/images/citizen-sleeper-2-starward-vector-bc7xg.jpg?resize=1&w=360&h=480&quality=medium"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Citizen Sleeper 2: Starward Vector</h3>
                <p className="text-sm mb-2">$29.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 2"
                src="/images/into-the-emberlands-1q2fq.png?resize=1&w=360&h=480&quality=medium"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Into The Emberlands</h3>
                <p className="text-sm mb-2">$24.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 3"
                src="/images/EGSAtomfallRebellionS21200x1600-2c38b2d3ad863e9c95a2eef57bea6f13?resize=1&w=360&h=480&quality=medium.EGS_Atomfall_Rebellion_S2_1200x1600-2c38b2d3ad863e9c95a2eef57bea6f13?resize=1&w=360&h=480&quality=medium"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Atomfall</h3>
                <p className="text-sm mb-2">$19.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 4"
                src="/images/tails-of-iron-2-whiskers-of-winter-1wv1p.png?resize=1&w=360&h=480&quality=medium"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Tails of Iron: Whiskers of Winter</h3>
                <p className="text-sm mb-2">$34.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 5"
                src="/images/EGSFINALFANTASYVIIREBIRTHSquareEnixS21200x1600-7708f856b86bea9ac254780e78deb3cf?resize=1&w=360&h=480&quality=medium.EGS_FINALFANTASYVIIREBIRTH_SquareEnix_S2_1200x1600-7708f856b86bea9ac254780e78deb3cf?resize=1&w=360&h=480&quality=medium"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">FINAL FANTASY VII REBIRTH</h3>
                <p className="text-sm mb-2">$69.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 6"
                src="/images/EGSSniperEliteResistanceRebellionS21200x1600-d413785bb8cb0f374e6af7067576480f?resize=1&w=360&h=480&quality=medium.EGS_SniperEliteResistance_Rebellion_S2_1200x1600-d413785bb8cb0f374e6af7067576480f?resize=1&w=360&h=480&quality=medium"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Sniper Elite: Resistance</h3>
                <p className="text-sm mb-2">$39.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 7"
                src="/images/placeholder.webp"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Stellar Odyssey</h3>
                <p className="text-sm mb-2">$45.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <Card className="bg-card rounded-[7px] flex flex-col h-full">
              <Image
                alt="Game 8"
                src="/images/placeholder.webp"
                width={200}
                height={300}
                className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
              />
              <CardContent className="p-3 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground">Base Game</p>
                <h3 className="text-sm font-semibold">Mystic Legends</h3>
                <p className="text-sm mb-2">$49.99</p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
