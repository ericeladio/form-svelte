<script>
    export let buttonName = "Next step";
    export let info 
</script>

<div class="flex flex-col justify-evenly w-5/6 mx-auto h-[500px]">
    <div class="mt-3">
        <h2 class="text-blue-950 text-3xl font-bold mb-3">
            {info.title}
        </h2>
        <p class="text-LightGray">
            {info.description}
        </p>
    </div>
    <slot />
    <div class="flex justify-end">
        <button
            class="bg-MarineBlue w-[110px] rounded py-2 text-white mt-2"
            on:click
        >
            {buttonName}
        </button>
    </div>
</div>
