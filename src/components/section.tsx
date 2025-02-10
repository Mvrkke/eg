import Image from "next/image";
import { ChevronRight, Menu, Search, Plus, ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Section() {
  return (
    <main className="flex">
      <div className="flex h-screen bg-background">
        <div className="md:w-64 w-16 border-r border-border flex flex-col justify-start gap-12 items-center bg-[#2C2C2E] fixed transition-all duration-300 hidden sm:flex min-h-screen">
          <div className="p-4 flex items-center justify-center m-2">
            <Image
              alt="Epic Games Logo"
              src="/images/Clip-path-group.svg"
              width={50}
              height={100}
              className="h-12 w-12"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <nav className="space-y-1 px-2">
              <Button variant="default" className="w-full justify-start gap-3 text-[#FFFFFF]">
                <Image
                  alt="Unreal Engine"
                  src="/images/app-store.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="md:inline hidden">Store</span>
              </Button>
            </nav>
            <nav className="space-y-1 px-2">
              <Button
                size="default"
                variant="ghost"
                className="w-full justify-start gap-3 text-muted-foreground"
              >
                <Image
                  alt="Unreal Engine"
                  src="/images/folder.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="md:inline hidden">Library</span>
              </Button>
            </nav>
            <nav className="space-y-1 px-2">
              <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
                <Image
                  alt="Unreal Engine"
                  src="/images/ue-logo.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="md:inline hidden">Unreal Engine</span>
              </Button>
            </nav>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0 top-4 translate-x-1/2 rounded-full bg-background shadow-md border border-border md:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-background flex flex-col md:ml-64 min-h-screen">
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden p-4">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <div className="flex flex-col gap-6 mt-6">
                <div className="relative flex items-center w-full">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 py-1"
                  />
                  <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="#" className="text-foreground hover:text-muted-foreground">
                    Discover
                  </Link>
                  <Link href="#" className="text-foreground hover:text-muted-foreground">
                    Browse
                  </Link>
                  <Link href="#" className="text-foreground hover:text-muted-foreground">
                    News
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex flex-row items-center m-[24px] justify-between">
            <div className="flex flex-row w-auto gap-4">
              <div className="flex items-center gap-20">
                <Image
                  alt="Unreal Engine"
                  src="/images/v-shaped-arrow-left.svg"
                  width={20}
                  height={20}
                  className="h-5 w-4 hidden"
                />
              </div>
              <div className="relative flex max-w-sm items-center gap-10">
                <div className="relative flex items-center w-full">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 py-1"
                  />
                  <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
                </div>
              </div>
              <div className="flex gap-4 items-center ml-[20px]">
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  Discover
                </Link>
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  Browse
                </Link>
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  News
                </Link>
              </div>
            </div>
            <div className="flex ml-40 gap-10 items-center">
              <div>
                <Image
                  alt="Image"
                  src="/images/star-list.svg"
                  width={500}
                  height={500}
                  className="w-5 h-5"
                />
              </div>
              <div>
                <Image
                  alt="Image"
                  src="/images/shopping-bag.svg"
                  width={500}
                  height={500}
                  className="w-5 h-5"
                />
              </div>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src="/images/avatar.jpeg"
                    className="object-cover flex items-center"
                  />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
        <main className="min-h-screen bg-background text-foreground">
          <div className="relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10">
                <Image
                  alt="Spider-Man 2 Hero"
                  src="/images/Group-1.png"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 z-20 flex flex-col justify-center p-4 md:p-8 max-w-full md:max-w-2xl">
                <span className="text-xs md:text-sm font-semibold text-red-600 mb-2">MARVEL</span>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">SPIDER-MAN 2</h1>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  SPIDEY SENSE TINGLING...
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Mask up for more thrilling web-slinging heroics as Marvel&apos;s Spider-Man 2
                  swings onto PC.
                </p>
                <p className="text-lg md:text-xl font-semibold mb-6">$59.99</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-32">
                    Buy Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-40">
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
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
                        src="https://cdn1.epicgames.com/spt-assets/e83b81f79e604f8ba21cca597f1dc850/citizen-sleeper-2-starward-vector-bc7xg.jpg?resize=1&w=360&h=480&quality=medium"
                        width={200}
                        height={300}
                        className="w-full h-36 sm:h-48 rounded-[7px] object-cover"
                      />
                      <CardContent className="p-3 flex flex-col flex-grow">
                        <p className="text-sm text-muted-foreground">Base Game</p>
                        <h3 className="text-sm font-semibold">
                          Citizen Sleeper 2: Starward Vector
                        </h3>
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
                        src="https://cdn1.epicgames.com/spt-assets/cc08a8398d6649de81d06db1b9d20e97/into-the-emberlands-1q2fq.png?resize=1&w=360&h=480&quality=medium"
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
                        src="https://cdn1.epicgames.com/spt-assets/ac08e5cd066143b9b218b3ffb8efddb7/tails-of-iron-2-whiskers-of-winter-1wv1p.png?resize=1&w=360&h=480&quality=medium"
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
          </div>
        </main>
      </div>
    </main>
  );
}
