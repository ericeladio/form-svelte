<script>
    export let items;
    export let group;
    let activeName = ''
</script>

<div class="flex justify-between items-center h-[400px]">
    {#each items as item}
        <input
            class="hidden"
            type="radio"
            id={item.name}
            name={group}
            value={item.name}
        />
        <label 
            class:active={ activeName === item.name }
            class="rounded-md py-3 px-4 border-2 border-gray-500 w-[140px] h-[150px] hover:bg-LightBlue hover:cursor-pointer hover:border-blue-500"
            for={item.name}
            on:click={() => (activeName = item.name)}
        >
            <div class="flex flex-col h-full justify-between">
                <img
                    class="w-10 h-10"
                    src={`/icon-${item.name}.svg`}
                    alt={`${item.name}icon`}
                />
                <div>
                    <h3 class="text-blue-950 font-bold">{item.name}</h3>
                    <p class=" text-xs">{item.price}</p>
                </div>
            </div>
        </label>
    {/each}
</div>

<style>
    .active {
        border: 2px solid blue;
        background-color: #ADD8E6 ;
    }
</style>
