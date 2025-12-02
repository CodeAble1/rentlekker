<script lang="ts">
    import Navbar from "$lib/components/layout/navbar/navbar.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import { goto } from "$app/navigation";

    function handleClick() {
        goto("/search");
    }
</script>

<Navbar />
<h1>Welcome to the home page</h1>

<section class="flex flex-col gap-4 mt-8 bg-gray-100 mb-6">
    <h1>Search for a property</h1>
    <input type="text" placeholder="Enter location..." />
    <button
        onclick={handleClick}
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
        Search
    </button>
</section>

<section>
    <Button
        variant="outline"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
        Start Application
    </Button>
</section>

<section>
    <Button
        onclick={() => goto("/properties/create")}
        variant="outline"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
        Create Property
    </Button>

    <Button
        onclick={() => goto("/")}
        variant="outline"
        class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mt-4"
    >
        List Properties
    </Button>
</section>
