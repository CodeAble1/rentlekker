<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<section class="grid grid-cols-3 gap-4">
    {#each Array(9) as _, index}
        <Card.Root>
            <Card.Header>
                <Card.Title>Property {index + 1}</Card.Title>
            </Card.Header>
            <Card.Content>
                <p>Location: Example Location {index + 1}</p>
                <p>Price: ${(index + 1) * 1000} per month</p>
            </Card.Content>
            <Card.Footer>
                <Button
                    variant="default"
                    class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    View Details
                </Button>
            </Card.Footer>
        </Card.Root>
    {/each}
</section>
