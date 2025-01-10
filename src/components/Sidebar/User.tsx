import { ChevronUp, Coins, LogOut, User2 } from "lucide-react"
import { DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuContent, DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup } from "../ui/dropdown-menu"
import { SidebarMenuButton } from "../ui/sidebar"
import { Button } from "../ui/button"
import { Card, CardHeader } from "../ui/card"
import { Separator } from "../ui/separator"

const User = () => {
    const user = {
        name: "John Doe",
        email: "pedrosbmartinazzo@hotmail.com",
        points: 100
    }

    return (
        <>

            <Separator />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                        <User2 /> {user.name}
                        <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" alignOffset={-100}>
                    <Button className="w-[100%]" variant={"ghost"}>Pontos <Coins /> {user.points}</Button>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>{user.name}</DropdownMenuItem>
                        <DropdownMenuItem>{user.email}</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <Button className="w-[100%]" variant={"secondary"}><LogOut /> Sair</Button>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default User