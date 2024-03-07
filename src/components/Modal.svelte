<script>
    import { steps, cuestion, inputs, items } from "../info.js";
    import Steps from "./Steps.svelte";
    import Form from "./Form.svelte";
    import CustomInput from "./CustomInput.svelte";
    import CustomRadio from "./CustomRadio.svelte";
    let stateForm = 1;
    let buttonName = "Next step";

    const handleClick = () => {
        if (stateForm >= 5) {
            console.log("test");
        } else {
            stateForm = stateForm + 1;
        }
        if (stateForm === 5) {
            buttonName = "Send";
        }
    };
</script>

<section class="  w-[900px] rounded-md bg-white mx-auto">
    <div class="flex h-[600px]">
        <aside
            class=" bg-sidebar-mobile bg-no-repeat bg-cover w-1/3 m-6 rounded-md md:bg-sidebar-desktop"
        >
            <Steps {steps} />
        </aside>
        <div class="w-2/3">
            <Form
                on:click={handleClick}
                {buttonName}
                info={cuestion[stateForm - 1]}
            >
                {#if stateForm === 1}
                    <CustomInput {inputs} />
                {:else if stateForm === 2}
                    <CustomRadio group="plan" {items} />
                {:else if stateForm === 3}
                    <h1>Personal info</h1>
                    <p>
                        {stateForm}
                    </p>
                {:else if stateForm === 4}
                    <h1>Personal info</h1>
                    <p>
                        {stateForm}
                    </p>
                {:else if stateForm === 5}
                    <h1>Personal info</h1>
                    <p>
                        {stateForm}
                    </p>
                {/if}
            </Form>
        </div>
    </div>

    <div class="attribution">
        Challenge by <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank">Frontend Mentor</a
        >. Coded by <a href="/">Your Name Here</a>.
    </div>
</section>

<style>
    .attribution {
        font-size: 11px;
        text-align: center;
    }
    .attribution a {
        color: hsl(228, 45%, 44%);
    }
</style>
