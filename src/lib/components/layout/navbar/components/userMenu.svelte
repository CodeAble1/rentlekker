<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.ts";
    import * as Avatar from "$lib/components/ui/avatar/index.ts";

    // User data
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <Avatar.Avatar>
            <Avatar.Fallback>User</Avatar.Fallback>
        </Avatar.Avatar>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content class="bg-white p-4 rounded shadow-md">
        <DropdownMenu.Group>
            <DropdownMenu.Label>My name</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
                <a href="/properties" class="w-full">Dashboard</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <a href="/messages" class="w-full">Messages</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <a href="/settings" class="w-full">Settings</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <a href="/logout" class="w-full text-red-400">Logout</a>
            </DropdownMenu.Item>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
