<script>
    export let items;
    export let group;
    export let plans;
</script>

<div class="flex justify-between items-center h-[400px]">
    {#each items as item}
        <label
            class:active={plans["seletedPlan"].split(',')[0] === item.name}
            class="rounded-md py-3 px-4 border-2 border-gray-500 w-[140px] h-[150px] hover:bg-LightBlue hover:cursor-pointer hover:border-blue-500"
        >
            <input
                class="hidden"
                type="radio"
                id={item.name}
                name={group}
                value={item.name + "," + item.price}
                bind:group={plans["seletedPlan"]}
            />
            <div class="flex flex-col h-full justify-between">
                <img
                    class="w-10 h-10"
                    src={`/icon-${item.name}.svg`}
                    alt={`${item.name}icon`}
                />
                <div>
                    <h3 class="text-blue-950 font-bold">{item.name}</h3>
                    <p class=" text-xs">${item.price}/mo</p>
                </div>
            </div>
        </label>
    {/each}
</div>

<style>
    .active {
        border: 2px solid blue;
        background-color: #add8e6;
    }
</style>
