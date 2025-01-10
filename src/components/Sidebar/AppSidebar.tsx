import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Clock, Home, Store } from "lucide-react"
import { ForwardRefExoticComponent } from "react"
import Telas from "./Telas"
import User from "./User"

export type SideBarItem = {
    title: string
    url: string
    icon: ForwardRefExoticComponent<any>
}

export function AppSidebar() {


    const items: SideBarItem[] = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        {
            title: "Tasks Concluídas",
            url: "/completed",
            icon: Clock,
        },
        {
            title: "Loja",
            url: "/store",
            icon: Store,
        }
    ]

    return (
        <Sidebar collapsible="icon">

            <SidebarHeader>
                <SidebarTrigger />
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <Telas items={items} />
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <User />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
