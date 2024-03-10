<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let info;
    export let stateForm;
</script>

<div>
    <div>
        <di>
            <h3>{info.seletedPlan}</h3>
            <button on:click={() => dispatch("change", stateForm = 2)} >change</button>
        </di>
        <span>price</span>
    </div>
    <div>
        {#each info.complements as complement }
            <div>
                <h2>{complement}</h2>
                <span>price</span>
            </div>
        {/each}
    </div>
    <div>
        <h3>total</h3>
        <span>$total/mon</span>
    </div>
</div>
