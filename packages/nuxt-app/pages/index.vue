<template>
    <form>
        <div class="ide-container">
            <div class="ide">
                <!-- line number div -->
                <div class="lines">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>
                <!-- function looking form div -->
                    <!-- 
                        consolas-style font
                        [red]function [magenta]createTransaction(
                            address receiver = [userInput]
                            address ERC20TokenAddress = [userInput]
                            uint 256 amount = [userInput]
                            uint 256 deadline = [userInput]
                            uint 256 tip = [userInput]
                        )
                    -->
                <div class="code">
                    <div>
                        <span class="function">function </span><span class='function-name'>createTransaction</span>(
                    </div>
                        <div class="form-field">
                            <label><span class="data-type">address</span>&nbsp;receiver<span class="code">&nbsp;=</span></label>
                            <input type="text" placeholder="Enter receiver address_">;
                        </div>
                        <div class="form-field">
                            <label><span class="data-type">address</span>&nbsp;ERC20TokenAddress<span class="code">&nbsp;=</span></label>
                            <input type="text" value="Ethereum ;" disabled>
                        </div>
                        <div class="form-field">
                            <label><span class="data-type">uint 256</span>&nbsp;amount<span class="code">&nbsp;=</span></label>
                            <input type="number" placeholder="Amount to be Sent">;
                        </div>
                        <div class="form-field">
                            <label><span class="data-type">uint 256</span>&nbsp;deadline<span class="code">&nbsp;=</span></label>
                            <input type="date">;
                        </div>
                        <div class="form-field">
                            <label><span class="data-type">uint 256</span>&nbsp;tip<span class="code">&nbsp;=</span></label>
                            <input type="number" placeholder="Enter Tip Amount">;
                        </div>
                        <div>) <span class="function">public</span> {</div>
                        <div>...<br /></div>
                        <div>...<br /></div>
                        <div class="form-field">
                            <button type="submit">transactionsList.<span class="function">push</span>(newTransaction);</button>
                        </div>
                </div> 
            </div>
        </div>
        
    </form>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');
.ide-container {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
}
.ide {
    display: grid;
    grid-template-columns: auto 1fr;
    width: auto;
    max-width: 600px;
    background-color: #2e303b;
    border-radius: 16px;
    padding: 30px;
    font-family: 'Roboto Mono', monospace
}

.lines {
    display: flex;
    flex-flow: column nowrap;
    padding: 0 24px 10px 12px;
    color: rgb(173, 173, 173);
    text-align: right;
}

.code {
    color: rgb(238, 238, 238);
    display: flex;
    flex-flow: column nowrap;
}

.function {
    color: rgb(252, 126, 126);
}
.function-name {
    color: rgb(184, 97, 255);
}

.form-field {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
}

.data-type {
    color: rgb(72, 136, 255);
    text-align: right;
}

.form-field label {
    display: flex;
    flex-direction: row;
    margin-left: 32px;
    color: rgb(201, 171, 0);
}

.form-field input {
    background: none;
    padding: 0 5px;
    color: rgb(238, 238, 238);
    width: auto;
    justify-self: flex-end;
}

.form-field button {
    margin-left: 32px;
}

.form-field button:hover {
    text-decoration: underline;
}
</style>