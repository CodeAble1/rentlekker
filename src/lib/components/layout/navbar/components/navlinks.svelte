<script lang="ts">
    let navLinks = [
        { href: "/safe-renting", label: "Safe Renting" },
        { href: "/search", label: "Find Properties" },
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About Us" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];
</script>

<div class="flex items-center gap-3">
    {#each navLinks as link}
        <a
            href={link.href}
            class="mx-4 text-gray-700 hover:text-gray-900 font-medium"
            >{link.label}</a
        >
    {/each}
</div>
