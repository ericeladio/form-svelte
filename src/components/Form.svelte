<script>
    export let buttonName = "Next step";
</script>

<div class="flex flex-col justify-evenly w-4/6 mx-auto h-[500px]">
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
