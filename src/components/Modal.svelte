<script>
    import Steps from "./Steps.svelte";
    import Form from "./Form.svelte";
    let stateForm = 1;
    let buttonName = "Next step";
    let steps = [
        { number: 1, title: "Step 1", description: "Your info" },
        { number: 2, title: "Step 2", description: "Select plan" },
        { number: 3, title: "Step 3", description: "Add-ons" },
        { number: 4, title: "Step 4", description: "Summary" },
    ];
    const handleClick = () => {
        if (stateForm >= 5) {
            console.log('test')
            
        }
        else{stateForm = stateForm + 1}

        if (stateForm === 5){
            buttonName = "Send"
        }
    }
</script>

<section class="  w-[900px] rounded-md bg-white mx-auto">
    <div class="flex h-[600px]">
        <aside
            class=" bg-sidebar-mobile bg-no-repeat bg-cover w-1/3 m-6 rounded-md md:bg-sidebar-desktop"
        >
            <Steps {steps} />
        </aside>
        <div class="w-2/3">
            <Form on:click={handleClick} {buttonName}>
                {#if stateForm === 1}
                    <div class="mt-3">
                        <h2 class="text-blue-950 text-3xl font-bold mb-3">
                            Personal info
                        </h2>
                        <p class="text-LightGray">
                            Please provide your name, email address, and phone
                            number.
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <labe class="mb-2 text-blue-950">Name</labe>
                        <input
                            class=" rounded py-3 border-2 border-gray-500"
                            placeholder="Name"
                            type="text"
                        />
                    </div>
                    <div class="flex flex-col">
                        <labe class="mb-2 text-blue-950">Email Address</labe>
                        <input
                            class=" rounded py-3 border-2 border-gray-500"
                            placeholder="Email Address"
                            type="email"
                        />
                    </div>
                    <div class="flex flex-col">
                        <labe class="mb-2 text-blue-950">Phone Number</labe>
                        <input
                            class=" rounded py-3 border-2 border-gray-500"
                            placeholder="Phone Number"
                            type="tel"
                        />
                    </div>
                {:else if stateForm === 2}
                    <h1>Personal info</h1>
                    <p>
                        {stateForm}
                    </p>
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

            <!--

         Step 1 end

        Step 2 start 

        Select your plan You have the option of monthly or yearly billing.
        Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next Step

        Step 2 end 

         Step 3 start 

        Pick add-ons Add-ons help enhance your gaming experience. Online service
        Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud
        save +$2/mo Customizable Profile Custom theme on your profile +$2/mo Go
        Back Next Step

         Step 3 end 

        Step 4 start 

        Finishing up Double-check everything looks OK before confirming.

        Dynamically add subscription and add-on selections here 

        Total (per month/year) Go Back Confirm

         Step 4 end 

         Step 5 start 

        Thank you! Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to email
        us at support@loremgaming.com.

         Step 5 end  -->
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
