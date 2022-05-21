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
                            <select id="ERC20Token" name="ERC20Token" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent">
                                <option>Polygon</option>
                                <option>Ethereum</option>
                                <option>Avalanche</option>
                            </select>
                            <!-- <input type="text" value="Ethereum ;" disabled> -->
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

:
<style>

.ide-container {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
}
.ide {
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: #2e303b;
    /* padding: 30px; */
    font-family: 'Roboto Mono', monospace;
    transition: all .25s ease-in-out;
}

.ide:hover {
    transform: scale(1.1)
}

.lines {
    display: flex;
    flex-flow: column nowrap;
    padding: 0 24px 10px 12px;
    color: rgb(173, 173, 173);
    text-align: right;
    justify-content: space-evenly;
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
    transition: all .2s ease-in-out;
}

.form-field button:hover {
    text-decoration: underline;
    transform: scale(1.1)
}
</style>