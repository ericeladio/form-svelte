<script>
    export let checks;
     export let  plans
    let activeName = []
    const handler = (name) => {
        if (activeName.includes(name)) {
            activeName = activeName.filter((item) => item !== name);
        } else {
            activeName = [...activeName, name];
        }

        plans['complements'] = activeName
    };
</script>

<div class="flex flex-col h-[400px] justify-evenly">
    {#each checks as check}
        <div
            class={activeName.includes(check.name)
                ? " h-[80px] flex items-center border-2 border-blue-950 rounded-md justify-around bg-LightBlue hover:cursor-pointer"
                : " h-[80px] flex items-center border-2 border-blue-950 rounded-md justify-around  hover:bg-LightBlue hover:cursor-pointer"}
            on:click={handler(check.name)}
        >
            <input
                type="checkbox"
                id={check.name}
                name={check.name}
                value={check.name}
                checked={activeName.includes(check.name)}
                class="h-5 w-5 mx-4 hover:cursor-pointer"
            />
            <label class="w-full hover:cursor-pointer" for="vehicle1">
                <div class="flex justify-between items-center mr-4">
                    <div>
                        <h3 class="text-blue-950 font-bold">{check.name}</h3>
                        <span class="">{check.description}</span>
                    </div>
                    <span class="text-blue-950">{check.price}</span>
                </div>
            </label>
        </div>
    {/each}
</div>
