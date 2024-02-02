import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Heading from "../Heading";
import Container from "@/components/Container";
import Productcard from "@/utils/Productcard";
import { SidebarContent, ExpandMoreContent } from "@/constants";
import Categorycard from "./Categorycard";



const Categories = () => {
   
    const categoryItems = [...SidebarContent, ...ExpandMoreContent];

  return (
    <Container>
        <Heading item1={"Shop by"} item2={"Categories"} />
    <Carousel className="w-full py-2">
    <CarouselContent className="w-full flex">
  {categoryItems.map((item, index) => (
    (ExpandMoreContent[index] || SidebarContent[index] !== undefined) && (
      <CarouselItem key={index} className={`max-w-28 max-h-[260px]  ${(ExpandMoreContent[index] && SidebarContent[index]) !== undefined ? "md:max-w-56 md:max-h-32" : "" }`}>
          <Card className="shadow-none border-none">
            <CardContent className="aspect-square items-center justify-center">
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                    {ExpandMoreContent[index] && (
                    <aside className="w-full">
                    <Categorycard items={ExpandMoreContent[index]} />
                    </aside>
                    )}
                    {
                        SidebarContent[index] && (
                    <aside className="w-full">
              <Categorycard items={SidebarContent[index]} />
                    </aside>
                        )
                    }
                </div>
        
              
               
            </CardContent>
          </Card>
      </CarouselItem>
    )
  ))}
</CarouselContent>

    </Carousel>
    </Container>
  );
};

export default Categories;
