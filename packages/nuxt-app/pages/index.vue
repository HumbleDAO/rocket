<template>
  <div class="w-full pt-6 max-w-xl mx-auto">
    <h2>Schedule a payment</h2>
    <div class="form-container">
      <div class="blockchain-select">
        <div class="bs-from">
          <div class="circle">
            <span>[Logo Here]</span>
            <p>FROM</p>
          </div>
          <Dropdown />
        </div>
        <div class="bs-to">
          <div class="circle">
            <span>[Logo Here]</span>
            <p>TO</p>
          </div>
          <Dropdown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.form-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: space-around;
  margin: 2em 0;
}

.blockchain-select {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  text-align: center;
}

.circle {
  border: 2px rgba(0, 0, 0, 0.66) solid;
  border-radius: 50%;
  width: 15vw;
  height: 15vw;
  position: relative;
  top: 2em;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding-bottom: 2em;
  font-size: 0.75em;
  font-weight: 600;
}

.bs-to {
  margin-left: 12vw; 
}
</style>
