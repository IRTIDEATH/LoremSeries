"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
    FloatingDockMobile,
    DockMobileItem,
} from "@/components/ui/floating-dock";
import { IconBackpack, IconCards, IconHome, IconPlane } from "@tabler/icons-react";

export const navigations = [
    {
        title: "Home",
        href: "/",
        icon: <IconHome className="size-full" />,
    },
    {
        title: "About",
        href: "/about",
        icon: <IconCards className="size-full" />,
    },
    {
        title: "Projects",
        href: "/projects",
        icon: <IconBackpack className="size-full" />,
    },
    {
        title: "Messages",
        href: "/messages",
        icon: <IconPlane className="size-full" />,
    },
] as const;

export default function FloatingNav() {
    const pathname = usePathname();
    return (
        <div className="fixed bottom-4 right-4 z-50">
                <FloatingDockMobile>
                    {navigations.map(({ title, href, icon }, index) => (
                        <Link key={title} href={href}>
                            <DockMobileItem
                                title={title}
                                icon={icon}
                                index={index}
                                max={navigations.length}
                                className={cn(
                                    pathname === href && "border-brand"
                                )}
                            />
                        </Link>
                    ))}
                </FloatingDockMobile>                
        </div>
    );
}