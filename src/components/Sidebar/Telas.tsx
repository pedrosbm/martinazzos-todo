import { SideBarItem } from './AppSidebar';
import { SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';

type TelasProps = {
    items: SideBarItem[]
}

const Telas = ({items} : TelasProps) => {
    return (
        <>
            <SidebarGroupLabel>Telas</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild >
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </>
    );
}

export default Telas