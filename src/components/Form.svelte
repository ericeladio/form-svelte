<script>
    import { createEventDispatcher } from "svelte";
    export let buttonName = "Next step";
    export let info;
    export let stateForm;
    const dispatch = createEventDispatcher();
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
    <div class="flex justify-between">
        <button
            class={stateForm === 1
                ? "text-White"
                : "border-MarineBlue border-2 w-[110px] rounded py-2 text-MarineBlue mt-2"}
            disabled={stateForm <= 1 ? true : false}
            on:click={() => dispatch("clicker", stateForm - 1)}
        >
            Go Back
        </button>
        <button class="bg-MarineBlue w-[110px] rounded py-2 text-white mt-2"  on:click={() => dispatch("clicker", stateForm + 1)}>
           {buttonName}
        </button>
    </div>
</div>
