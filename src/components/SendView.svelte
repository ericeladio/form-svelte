<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let info;
    export let stateForm;
</script>

<div>
    <div>
        <di>
            <h3>{info.seletedPlan.split(',')[0]}</h3>
            <button on:click={() => dispatch("change", stateForm = 2)} >change</button>
        </di>
        <span>{info.seletedPlan.split(',')[1]}</span>
    </div>
    <div>
        {#each info.complements as complement }
            <div>
                <h2>{complement.split(',')[0]}</h2>
                <span>{complement.split(',')[1]}</span>
            </div>
        {/each}
    </div>
    <div>
        <h3>total</h3>
        <span>$total/mon</span>
    </div>
</div>
