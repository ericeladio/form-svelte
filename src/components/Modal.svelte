<script>
    import { steps, cuestion, inputs, items, checks } from "../info.js";
    import Steps from "./Steps.svelte";
    import Form from "./Form.svelte";
    import CustomInput from "./CustomInput.svelte";
    import CustomRadio from "./CustomRadio.svelte";
    import CustomCheckBox from "./CustomCheckBox.svelte";
    import SendView from "./SendView.svelte";

    let stateForm = 1;
    let buttonName = "Next step";
    let plans = {'Name': "", 'Email Address': "", 'Phone Number': "", 'seletedPlan': "", 'complements': []};



    const cliker = (e) => {
        stateForm = e.detail;
        
        if (e.detail === 4) {
            buttonName = "Send";
        }

        if (e.detail === 5) {
            alert("Thanks for your support!");
        }
        console.log(plans)
    };

    const change = (e) => {
        stateForm = e.detail;
    };
</script>

<section class="w-[900px] rounded-md bg-white mx-auto">
    <div class="flex h-[600px]">
        <aside
            class=" bg-sidebar-mobile bg-no-repeat bg-cover w-1/3 m-6 rounded-md md:bg-sidebar-desktop"
        >
            <Steps {steps} {stateForm} />
        </aside>
        <div class="w-2/3">
            <Form
                
                {buttonName}
                info={cuestion[stateForm - 1]}
                {stateForm}
                on:clicker={cliker}
            >
                {#if stateForm === 1}
                    <CustomInput  bind:plans {inputs} />
                {:else if stateForm === 2}
                    <CustomRadio bind:plans group="plan" {items} />
                {:else if stateForm === 3}
                   <CustomCheckBox  bind:plans {checks} />
                {:else if stateForm === 4}
                    <SendView info={plans}  on:change={change} {stateForm}/>
                {:else if stateForm === 5}
                    <h1>Personal info</h1>
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
