// YOUR CODE BELOW

function allSystemsGo(spaceObj) {
    debugger;
    let isGo = true;;
    for (let key in spaceObj) {
        let element = spaceObj[key];
        if (typeof element === 'object') {
            isGo = isGo === allSystemsGo(spaceObj[key]);
        }
        else {
            isGo = isGo === element;
        }
    }
    return isGo;
}

let systems = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: false
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  };
  
  console.log(allSystemsGo(systems));