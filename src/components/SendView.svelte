<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let info;
    export let stateForm
    let planName = info.seletedPlan.split(',')[0]
    let planPrice = info.seletedPlan.split(',')[1]
    let total = Number(planPrice )+ info.complements.reduce((a, b) => a + Number(b.split(',')[1]), 0)
</script>

<div>
    <div>
        <di>
            <h3>{planName}</h3>
            <button on:click={() => dispatch("change", stateForm = 2)} >Change</button>
        </di>
        <span>${planPrice}/mo</span>
    </div>
    <div>
        {#each info.complements as complement }
            <div>
                <h2>{complement.split(',')[0]}</h2>
                <span>+${complement.split(',')[1]}/mo</span>
            </div>
        {/each}
    </div>
    <div>
        <h3>total</h3>
        <span>${total}/mon</span>
    </div>
</div>
