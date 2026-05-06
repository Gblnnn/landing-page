"use client";

import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Props {
  fontsize?: string;
}

// const components: {
//   id: string;
//   title: string;
//   to: string;
//   description: string;
// }[] = [
//   {
//     id: "1",
//     title: "Civil",
//     to: "/civil-engineering",
//     description: "Construction of non-commercial buildings and structures",
//   },
//   {
//     id: "2",
//     title: "Mechanical",
//     to: "/mechanical-dept",
//     description:
//       " High-quality installation, maintenance, and repair of industrial systems,",
//   },
//   {
//     id: "3",
//     title: "Automobile",
//     to: "",
//     description: "Repair and maintainence of light and heavy vehicles",
//   },
//   {
//     id: "4",
//     title: "MEP",
//     to: "",
//     description: "Mechanical, Electrical and Plumbing works.",
//   },
//   {
//     id: "5",
//     title: "Electrical",
//     to: "",
//     description: "Electrical Works dealing with installation and maintainence.",
//   },
//   {
//     id: "6",
//     title: "Landscaping",
//     to: "",
//     description: "Transforming Barren lands to beautiful landscapes",
//   },
// ];

export function Nav(props: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList style={{ display: "flex", gap: "" }}>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ fontSize: props.fontsize, background: "none" }}
          >
            Who we are
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                    style={{
                      background: "linear-gradient(#002244, #800020)",
                      boxShadow: "1px 1px 10px rgba(0 0 0/ 70%)",
                    }}
                  >
                    <img src="/sohar_star_logo.png" width={"35rem"} />

                    <div
                      className="mb-2 mt-4 text-lg font-medium"
                      style={{ color: "white" }}
                    >
                      Sohar Star United LLC
                    </div>
                    <p
                      className="text-sm leading-tight text-muted-foreground"
                      style={{ color: "white", opacity: 0.75 }}
                    >
                      A company focussed on quality & excellence
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/our-team" title="Our Team">
                A team commited to excellence.
              </ListItem>

              <ListItem href="/our-mission" title="Our Mission">
                Learn more about our mission.
              </ListItem>

              <ListItem href="/our-values" title="Our Values & Culture">
                Learn more about our core values.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ fontSize: props.fontsize, background: "none" }}
          >
            What we do
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.id} to={component.to}>
                  <ListItem key={component.title} title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/projects"
              style={{ fontSize: props.fontsize, background: "none" }}
              className={navigationMenuTriggerStyle()}
            >
              <p className="hoverable">Projects</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/careers"
              style={{ fontSize: props.fontsize, background: "none" }}
              className={navigationMenuTriggerStyle()}
            >
              <p className="hoverable">Careers</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/contact-us"
              style={{ fontSize: props.fontsize, background: "none" }}
              className={navigationMenuTriggerStyle()}
            >
              <p className="hoverable">Contact Us</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
