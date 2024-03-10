<script>
    export let inputs;
    export let plans 
     function typeAction(node,type) {
         node.type = type
     }
</script>

<div class=" flex flex-col justify-evenly h-[400px]">
    {#each inputs as input}
        <div class="flex flex-col">
            <labe class="mb-2 text-blue-950">{input.label}</labe>
            <input
                class=" rounded py-3 border-2 border-gray-500"
                placeholder={input.label}
                use:typeAction={input.type}
                bind:value={plans[input.label]}
            />
        </div>
    {/each}
</div>
