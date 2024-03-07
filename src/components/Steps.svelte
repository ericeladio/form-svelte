<script>
    export let steps

</script>
<div class="flex flex-col items-center">
    {#each steps as step}
    <div class="flex w-2/3 justify-center items-center mt-10">
        <div class="rounded-full h-8 w-8 border-2 flex items-center justify-center">
            {step.number}
        </div>
        <div class="ml-4 w-24" >   
        <span class="text-LightGray ">{step.title}</span>
        <h4 class="text-CoolGray font-">{step.description}</h4>
        </div>
    </div>
    {/each}
</div>


