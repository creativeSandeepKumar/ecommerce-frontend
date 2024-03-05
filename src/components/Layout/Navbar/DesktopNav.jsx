"use client";
import Link from "next/link"
import { ExpandMoreContent, MoreNavContent, SidebarContent, desktopNavItems } from "@/constants";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
   
  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const CategoryItems = [...SidebarContent, ...ExpandMoreContent]
  

const DesktopNav = () => {

  return (
    <div className="flex gap-1">
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base" >Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[90vw] gap-3 md:grid-cols-6 ">
              {CategoryItems.map((component, index) => (
               <li key={index} className="flex items-center">
               <img
                 src={component.images}
                 alt={component.text}
                 width="100%"
                 className="w-16"
               />
               <p className="text-xs">
                 {component.text}
               </p>
             </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       {desktopNavItems.map((items, index) => (
             <NavigationMenuItem key={index} >
             <Link href={items.url} legacyBehavior passHref>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="text-base">
                 {items.name}
                </div>
               </NavigationMenuLink>
             </Link>
           </NavigationMenuItem>
       ))}
      </NavigationMenuList>
    </NavigationMenu>
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">More</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-1 p-4 w-[200px] mx-auto justify-end">
                {MoreNavContent.map((item, index) => (
                     <li key={index} className="row-span-3">
                     <NavigationMenuLink asChild>
                       <a
                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                         href="/"
                       >
                         <p className="text-sm leading-tight text-muted-foreground">
                           {item.name}
                         </p>
                       </a>
                     </NavigationMenuLink>
                   </li>
                ))}
             
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}

export default DesktopNav