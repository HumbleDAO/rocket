<template>
  <div class="w-full pt-6 max-w-xl mx-auto">
    <button>&lt; Go Back</button>
    <br />
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
        <span class="bs-divider"> => </span>
        <div class="bs-to">
          <div class="circle">
            <span>[Logo Here]</span>
            <p>TO</p>
          </div>
          <Dropdown />
        </div>
      </div>
      <div class="asset-select">
        <!-- Asset Selection Dropdown --> 
        Asset Selection goes here
      </div>
    <!-- Amount Textfield -->   
    <!-- Recipient Textfield / Include CSV Option? --> 
    <!-- Split Evenly Button:default || Custom Split Option --> 
    <!-- Custom Split GUI if selected  --> 
    <!-- Schedule payment button --> 
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
  align-items: center;
  text-align: center;
}

.circle {
  border: 2px hsla(253, 100%, 64%, 0.116) solid;
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
  box-shadow: 0 0 12px hsla(253, 100%, 64%, 0.678);
}

.bs-divider {
  padding: 0 5vw;
}

</style>
