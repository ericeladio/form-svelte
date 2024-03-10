<script>
 export let inputs
</script>
<div class=" flex flex-col  justify-evenly h-[400px]">
    {#each inputs as input}
<div class="flex flex-col ">
    <labe class="mb-2 text-blue-950">{input.label}</labe>
    <input
        class=" rounded py-3 border-2 border-gray-500"
        placeholder={input.label}
        type={input.type}
    />
</div>
{/each}
</div>
