<script>
    export let checks;
    export let plans;
    let activeName = [];

</script>

<div class="flex flex-col h-[400px] justify-evenly">
    {#each checks as check}
        <label
            class={activeName.includes(check.name)
                ? " h-[80px] flex items-center border-2 border-blue-950 rounded-md  bg-LightBlue hover:cursor-pointer"
                : " h-[80px] flex items-center border-2 border-blue-950 rounded-md   hover:bg-LightBlue hover:cursor-pointer"}
        >
            <input
                type="checkbox"
                id={check.name}
                name={check.name}
                value={check.name + "," + check.price}
                bind:group={plans["complements"]}
                class="h-5 w-5 mx-4 hover:cursor-pointer"
            />
            <div class=" w-full flex justify-between items-center mx-4">
                <div>
                    <h3 class="text-blue-950 font-bold">{check.name}</h3>
                    <span class="">{check.description}</span>
                </div>
                <span class="text-blue-950">{check.price}</span>
            </div>
        </label>
    {/each}
</div>
