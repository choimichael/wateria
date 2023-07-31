function calculateOxygen() {
  var endMeter = parseFloat(document.getElementById("oxygenEndMeter").value);
  var startMeter = parseFloat(
    document.getElementById("oxygenStartMeter").value
  );
  var purifiedWaterSale = parseFloat(
    document.getElementById("purifiedWaterSale").value
  );
  var o2WaterSale = parseFloat(document.getElementById("o2WaterSale").value);

  var totalPurifiedMeterReading = endMeter - startMeter;
  var reportLoss =
    purifiedWaterSale + o2WaterSale * 0.65 - totalPurifiedMeterReading * 0.65;

  var lossString =
    reportLoss < 0 ? reportLoss.toFixed(2) : "+" + reportLoss.toFixed(2);

  document.getElementById("oxygenTotalPurifiedMeterReading").innerHTML =
    "Total Purified Meter Reading: " + totalPurifiedMeterReading;
  document.getElementById("oxygenReportLoss").innerHTML =
    "Report Loss: " + lossString;
}

function calculateAlkaline() {
  var endMeter = parseFloat(document.getElementById("alkalineEndMeter").value);
  var startMeter = parseFloat(
    document.getElementById("alkalineStartMeter").value
  );
  var alkalineWaterSale = parseFloat(
    document.getElementById("alkalineWaterSale").value
  );

  var totalAlkalineMeterReading = endMeter - startMeter;
  var reportLoss = alkalineWaterSale - totalAlkalineMeterReading * 2;

  var lossString =
    reportLoss < 0 ? reportLoss.toFixed(2) : "+" + reportLoss.toFixed(2);

  document.getElementById("alkalineTotalMeterReading").innerHTML =
    "Total Alkaline Meter Reading: " + totalAlkalineMeterReading;
  document.getElementById("alkalineReportLoss").innerHTML =
    "Report Loss: " + lossString;
}

function resetFields() {
  // Reset Oxygen Water fields
  document.getElementById("oxygenEndMeter").value = "";
  document.getElementById("oxygenStartMeter").value = "";
  document.getElementById("purifiedWaterSale").value = "";
  document.getElementById("o2WaterSale").value = "";
  document.getElementById("oxygenTotalPurifiedMeterReading").innerHTML = "";
  document.getElementById("oxygenReportLoss").innerHTML = "";

  // Reset Alkaline Water fields
  document.getElementById("alkalineEndMeter").value = "";
  document.getElementById("alkalineStartMeter").value = "";
  document.getElementById("alkalineWaterSale").value = "";
  document.getElementById("alkalineTotalMeterReading").innerHTML = "";
  document.getElementById("alkalineReportLoss").innerHTML = "";
}
