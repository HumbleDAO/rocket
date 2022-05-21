<template>
<div>
    <nav>
        <button
            type="button"
            @click="openModal"
            class="rounded-md bg-black bg-opacity-25 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
            Connect your Wallet
        </button>
    </nav>
    <main>
        <header>
            <pre class="moon">
                                *      .--.
                                      / /  ` 
                    +                | |
                            '         \ \__,
                        *          +   '--'  *
            </pre>
            <div class="title">
                <h1>Rocket Protocol</h1>
            </div>
            <pre class="rocket">
                   +   /\
    +                .'  '.   *
            *       /======\      +
                   ;:.  _   ;
                   |:. (_)  |
                   |:.  _   |
        +          |:. (_)  |          *
                   ;:.      ;
                 .' \:.    / `.
                / .-'':._.'`-. \
                |/    /||\    \|
            </pre>
            <pre class="ground">
              _..--"""````"""--.._
        _.-'``                    ``'-._
      -'                                '-
            </pre>
        </header>
        <div class="title">
            <p>A decentralized protocol for Scheduling Token Transfers on the blockchain.</p>
            <p><span>vvv</span> Get Started <span>vvv</span></p>
        </div>
        <CreateATransaction />
    </main>
</div>

</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

nav {
    display: flex;
    justify-content: flex-end;
    background: #2e303b;
    padding-top: 16px;
    padding-right: 16px;
    width: 100vw;
    position: absolute;
}

main {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background-color: #2e303b;
    color: rgb(255, 234, 175);
    font-family: 'Roboto Mono', monospace;
    padding: 3em 0;
}
.moon {
    position: absolute;
    top: -1px;
}
.moon, .rocket, .ground {
    font-size: .75em
}
.rocket {
    color:rgb(255, 82, 82);
    line-height: 1.4em;
}
.title {
    display: grid;
    text-align: center;
}

.title > h1 {
    font-size: 2.5em;
    color: #ffffff;
}

.title > p {
    margin-bottom: 0.5em;
}
p > span {
    color: rgb(252, 126, 126);
    font-weight: 600;
    margin-top: 0.5em;
}
</style>