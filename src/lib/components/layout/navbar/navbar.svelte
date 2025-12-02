<script lang="ts">
    import Navlinks from "./components/navlinks.svelte";
    import Logo from "$lib/components/widgets/logo.svelte";
    import UserMenu from "./components/userMenu.svelte";
    import { uiState } from "$lib/states/appState.svelte";
</script>

{#if uiState.isDesktop}
    <nav class="flex flex-row justify-between items-center mx-4 bg-gray-400">
        <Logo />
        <Navlinks />
        <UserMenu />
    </nav>
{:else}
    <nav class="flex flex-row justify-start items-center mx-4 bg-gray-400 h-16">
        <Logo />
        <Navlinks />
    </nav>
    <nav
        class="
        fixed bottom-0 left-0 right-0
        z-50
      bg-gray-500
        h-16
        flex items-center justify-around
    "
    ></nav>
{/if}
